import { useEffect } from "react";
import axios from "axios";
import { REST_API } from "./OAuth";
import { Navigate } from "react-router-dom";

const KakaoCallback = () => {
  // const [isRemember, setIsRemember] = useState(false);
  // const expires = moment().add('7', 'days').toDate();
  // const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    const grant_type = "authorization_code";
    const client_id = REST_API;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3000/oauth&code=${code}`,
        {
          header: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        const { access_token } = data;

        if (access_token) {
          console.log(`Bearer ${access_token}`);
          axios
            .post(
              "https://kapi.kakao.com/v2/user/me",
              {},
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                  "Content-type": "application/x-www-form-urlencoded",
                },
              }
            )
            .then((res) => {
              console.log("데이터 성공 :");
              console.log(res);
              const email = res.data.kakao_account.email;
              axios
                .post("/api/user/kakao", {
                  email: email,
                })
                .then((response) => {
                  const url = response.data;
                  const username = url.split("/")[0];
                  if (url.includes("/home")) {
                    // if (isRemember == true) {
                    //     setCookie('rememberEmail', email, expires);
                    // } else {
                    //     removeCookie('rememberEmail');
                    // }
                    sessionStorage.setItem("isLoggedIn", "true");
                    sessionStorage.setItem("whoLoggedIn", email);
                    alert(username + "님, 환영합니다!");
                    window.location.href = "/workspace";
                  } else if (url === "회원가입 필요") {
                    alert("카카오계정의 이메일로 회원가입을 해주세요.");
                    window.location.href = "/signup";
                  }
                });
            });
        } else {
          console.log("access_token 없음!");
        }
      });
  }, []);

  return <>kakao auth</>;
};

export default KakaoCallback;
