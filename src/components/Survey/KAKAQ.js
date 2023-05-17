import React from "react";
import { Box, Paper, CssBaseline, Toolbar, Typography, InputBase, ButtonBase, TouchRippleClassKey, SvgIcon, Avatar, Drawer, List, Divider, Accordion, Collapse, Grid, Container } from "@mui/material";
import { CgBorderBottom } from "react-icons/cg";
import logo from "../../Assets/Logo/logo.png"
import { useState } from "react";


function KAKAQ() {

    const [title, setTitle] = useState("")

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    return (
        <div id="___gatsby">
            <div tabindex="-1" id="gatsby-focus-wrapper">
                <div class="Muibox-root css-121had8">
                    <header class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed mui-fixed css-1jrh10h" style={{ boxShadow: 'none', borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: 'rgb(238, 238, 238)' }}>
                        <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-i6s8oy" style={{ height: '100%', minHeight: '56px', display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                            <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', flexGrow: '1', flexShrink: '1', flexBasis: '0%' }}>
                                <div class="MuiBox-root css-12kkxif" aria-label="Back to dashboard">
                                    <img src={logo} alt="KAKAQ-logo" style={{ height: "18px" }} />
                                </div>
                                <div class="MuiBox-root css-0">
                                    <div class="MuiBox-root css-0" style={{ display: "flex", paddingLeft: '20px', alignItems: 'center', top: '13px', position: 'absolute', flexDirection: 'row' }}>
                                        <div class="MuiBox-root css-191gqa8">
                                            <p class="MuiTypography-root MuiTypography-body1 css-qt1p9i">Drafts</p>
                                        </div>
                                        <div class="MuiBox-root css-4g6ai3">
                                            <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ color: 'rgb(0, 0, 0)', fontSize: '14px', whiteSpace: 'nowrap' }}>/</p>
                                        </div>
                                        <div class="MuiInputBase-root MuiInputBase-colorPrimary css-8x6mwb">
                                            <input placeholder="새로운 설문조사" type="text" class="MuiInputBase-input css-mnn31" value={title} onChange={handleTitleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div class="MuiBox-root css-0"></div>
                            </div>
                            <div class="MuiBox-root css-1oo7ptx">
                                <div class="MuiBox-root css-1txeit4">
                                    <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1xuqdzl" tabIndex="0" type="button" name="프로젝트 편집">
                                            <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ textDecoration: 'none', color: "rgb(38, 112, 255)", fontSize: "14px", fontWeight: "700" }}>프로젝트 편집</p>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                                    </div>
                                    <div class="MuiBox-root css-0" style={{ display: "flex", justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDkgMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBvcGFjaXR5PSIwLjYiPgogICAgICAgIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUpIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgICAgICAgZD0iTTIuMjkzOTIgMTQuMjA3OEMyLjQ4MjgxIDE0LjM5NDYgMi43Mzc3NSAxNC40OTk0IDMuMDAzNDIgMTQuNDk5NEMzLjI2OTA4IDE0LjQ5OTQgMy41MjQwMyAxNC4zOTQ2IDMuNzEyOTIgMTQuMjA3OEw2LjY3NzkyIDExLjI2ODhDNi44OTI5MiAxMS4wNTA4IDYuOTk5OTIgMTAuNzY4OCA2Ljk5OTkyIDEwLjQ4OThDNi45OTk5MiAxMC4yMTA4IDYuODkyOTIgOS45MzM3OCA2LjY3NzkyIDkuNzIwNzhMMy43MjI5MiA2Ljc5MDc4QzMuNTMzOSA2LjYwNDIxIDMuMjc5IDYuNDk5NiAzLjAxMzQyIDYuNDk5NkMyLjc0NzgzIDYuNDk5NiAyLjQ5Mjk0IDYuNjA0MjEgMi4zMDM5MiA2Ljc5MDc4QzIuMjEwNzMgNi44ODI2MSAyLjEzNjc0IDYuOTkyMDUgMi4wODYyMyA3LjExMjc0QzIuMDM1NzIgNy4yMzM0MyAyLjAwOTcxIDcuMzYyOTUgMi4wMDk3MSA3LjQ5Mzc4QzIuMDA5NzEgNy42MjQ2MSAyLjAzNTcyIDcuNzU0MTMgMi4wODYyMyA3Ljg3NDgyQzIuMTM2NzQgNy45OTU1MSAyLjIxMDczIDguMTA0OTUgMi4zMDM5MiA4LjE5Njc4TDQuNjIwOTIgMTAuNDk0OEwyLjI5MzkyIDEyLjgwMThDMi4yMDExIDEyLjg5MzggMi4xMjc0MiAxMy4wMDMzIDIuMDc3MTQgMTMuMTI0QzIuMDI2ODYgMTMuMjQ0NiAyLjAwMDk4IDEzLjM3NDEgMi4wMDA5OCAxMy41MDQ4QzIuMDAwOTggMTMuNjM1NSAyLjAyNjg2IDEzLjc2NDkgMi4wNzcxNCAxMy44ODU2QzIuMTI3NDIgMTQuMDA2MiAyLjIwMTEgMTQuMTE1NyAyLjI5MzkyIDE0LjIwNzhaIgogICAgICAgICAgICAgIGZpbGw9IiMzNDQ1NjMiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt='arrow' />
                                    </div>
                                </div>
                                <div class="MuiBox-root css-1txeit4">
                                    <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1cadocr" tabIndex="0" type="button" name="공유하기">
                                            <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ textDecoration: 'none', color: "rgba(29, 37, 45, 0.6)", fontSize: "14px", fontWeight: "700" }}>공유하기</p>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                                    </div>
                                    <div class="MuiBox-root css-0" style={{ display: "flex", justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDkgMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBvcGFjaXR5PSIwLjYiPgogICAgICAgIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUpIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgICAgICAgZD0iTTIuMjkzOTIgMTQuMjA3OEMyLjQ4MjgxIDE0LjM5NDYgMi43Mzc3NSAxNC40OTk0IDMuMDAzNDIgMTQuNDk5NEMzLjI2OTA4IDE0LjQ5OTQgMy41MjQwMyAxNC4zOTQ2IDMuNzEyOTIgMTQuMjA3OEw2LjY3NzkyIDExLjI2ODhDNi44OTI5MiAxMS4wNTA4IDYuOTk5OTIgMTAuNzY4OCA2Ljk5OTkyIDEwLjQ4OThDNi45OTk5MiAxMC4yMTA4IDYuODkyOTIgOS45MzM3OCA2LjY3NzkyIDkuNzIwNzhMMy43MjI5MiA2Ljc5MDc4QzMuNTMzOSA2LjYwNDIxIDMuMjc5IDYuNDk5NiAzLjAxMzQyIDYuNDk5NkMyLjc0NzgzIDYuNDk5NiAyLjQ5Mjk0IDYuNjA0MjEgMi4zMDM5MiA2Ljc5MDc4QzIuMjEwNzMgNi44ODI2MSAyLjEzNjc0IDYuOTkyMDUgMi4wODYyMyA3LjExMjc0QzIuMDM1NzIgNy4yMzM0MyAyLjAwOTcxIDcuMzYyOTUgMi4wMDk3MSA3LjQ5Mzc4QzIuMDA5NzEgNy42MjQ2MSAyLjAzNTcyIDcuNzU0MTMgMi4wODYyMyA3Ljg3NDgyQzIuMTM2NzQgNy45OTU1MSAyLjIxMDczIDguMTA0OTUgMi4zMDM5MiA4LjE5Njc4TDQuNjIwOTIgMTAuNDk0OEwyLjI5MzkyIDEyLjgwMThDMi4yMDExIDEyLjg5MzggMi4xMjc0MiAxMy4wMDMzIDIuMDc3MTQgMTMuMTI0QzIuMDI2ODYgMTMuMjQ0NiAyLjAwMDk4IDEzLjM3NDEgMi4wMDA5OCAxMy41MDQ4QzIuMDAwOTggMTMuNjM1NSAyLjAyNjg2IDEzLjc2NDkgMi4wNzcxNCAxMy44ODU2QzIuMTI3NDIgMTQuMDA2MiAyLjIwMTEgMTQuMTE1NyAyLjI5MzkyIDE0LjIwNzhaIgogICAgICAgICAgICAgIGZpbGw9IiMzNDQ1NjMiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt='arrow' />
                                    </div>
                                </div>
                                <div class="MuiBox-root css-1txeit4">
                                    <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1cadocr" tabIndex="0" type="button" name="응답자 찾기">
                                            <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ textDecoration: 'none', color: "rgba(29, 37, 45, 0.6)", fontSize: "14px", fontWeight: "700" }}>응답자 찾기</p>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                                    </div>
                                    <div class="MuiBox-root css-0" style={{ display: "flex", justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDkgMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBvcGFjaXR5PSIwLjYiPgogICAgICAgIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUpIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgICAgICAgZD0iTTIuMjkzOTIgMTQuMjA3OEMyLjQ4MjgxIDE0LjM5NDYgMi43Mzc3NSAxNC40OTk0IDMuMDAzNDIgMTQuNDk5NEMzLjI2OTA4IDE0LjQ5OTQgMy41MjQwMyAxNC4zOTQ2IDMuNzEyOTIgMTQuMjA3OEw2LjY3NzkyIDExLjI2ODhDNi44OTI5MiAxMS4wNTA4IDYuOTk5OTIgMTAuNzY4OCA2Ljk5OTkyIDEwLjQ4OThDNi45OTk5MiAxMC4yMTA4IDYuODkyOTIgOS45MzM3OCA2LjY3NzkyIDkuNzIwNzhMMy43MjI5MiA2Ljc5MDc4QzMuNTMzOSA2LjYwNDIxIDMuMjc5IDYuNDk5NiAzLjAxMzQyIDYuNDk5NkMyLjc0NzgzIDYuNDk5NiAyLjQ5Mjk0IDYuNjA0MjEgMi4zMDM5MiA2Ljc5MDc4QzIuMjEwNzMgNi44ODI2MSAyLjEzNjc0IDYuOTkyMDUgMi4wODYyMyA3LjExMjc0QzIuMDM1NzIgNy4yMzM0MyAyLjAwOTcxIDcuMzYyOTUgMi4wMDk3MSA3LjQ5Mzc4QzIuMDA5NzEgNy42MjQ2MSAyLjAzNTcyIDcuNzU0MTMgMi4wODYyMyA3Ljg3NDgyQzIuMTM2NzQgNy45OTU1MSAyLjIxMDczIDguMTA0OTUgMi4zMDM5MiA4LjE5Njc4TDQuNjIwOTIgMTAuNDk0OEwyLjI5MzkyIDEyLjgwMThDMi4yMDExIDEyLjg5MzggMi4xMjc0MiAxMy4wMDMzIDIuMDc3MTQgMTMuMTI0QzIuMDI2ODYgMTMuMjQ0NiAyLjAwMDk4IDEzLjM3NDEgMi4wMDA5OCAxMy41MDQ4QzIuMDAwOTggMTMuNjM1NSAyLjAyNjg2IDEzLjc2NDkgMi4wNzcxNCAxMy44ODU2QzIuMTI3NDIgMTQuMDA2MiAyLjIwMTEgMTQuMTE1NyAyLjI5MzkyIDE0LjIwNzhaIgogICAgICAgICAgICAgIGZpbGw9IiMzNDQ1NjMiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt='arrow' />
                                    </div>
                                </div>
                                <div class="MuiBox-root css-1txeit4">
                                    <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1cadocr" tabIndex="0" type="button" name="결과보기">
                                            <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ textDecoration: 'none', color: "rgba(29, 37, 45, 0.6)", fontSize: "14px", fontWeight: "700" }}>결과보기</p>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="MuiBox-root css-tzmmb1">
                                <div class="MuiBox-root css-1gmwkzf">
                                    <a class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabindex="0" href="가이드" target="_blank" aria-label="프로젝트 가이드 보러가기">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="HelpRoundedIcon">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88c.43-1.47 1.68-2.59 3.23-2.83 1.52-.24 2.97.55 3.87 1.8 1.18 1.63.83 3.38-.19 4.4z"></path>
                                        </svg>
                                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                    </a>
                                    <button class="MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-1iuaaxh" tabindex="0" type="button" id="mui-20">
                                        게시하기
                                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                    </button>
                                </div>
                                <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-148fdm8" tabindex="0" type="button" aria-label="설정" style={{ width: '32px', height: '32px', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }}>
                                    <div class="MuiAvatar-root MuiAvatar-circular css-1kavoh2" style={{ width: '100%', height: '100%' }}>
                                        <img alt="profile_image" src="https://lh3.googleusercontent.com/a/AGNmyxZ-kEj3uV178F4hJQqY8hHdyfuRWhGsM9MepJ4o=s96-c" class="MuiAvatar-img css-1hy9t21" />
                                    </div>
                                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                </button>
                            </div>
                        </div>
                    </header>
                    <div class="MuiDrawer-root MuiDrawer-docked css-gyfe2h">
                        <div class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-1l8j5k8">
                            <div class="MuiBox-root css-0" style={{ marginTop: '56px', marginBottom: '56px', backgroundColor: '(255, 255, 255)', height: '100%', width: '100%', position: 'relative' }}>
                                <div class="MuiBox-root css-1txvmxe">
                                    <div id="formContent" style={{ padding: '0px', color: 'rgb(66, 82, 110)', fontSize: '14px', fontWeight: '700' }}>전체 문항</div>
                                    <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabIndex="0" type="button" aria-label="추가하기">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1sonui6" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddBoxIcon">
                                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                                        </svg>
                                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                    </button>
                                </div>
                                <ul class="MuiList-root css-1uzmcsd" style={{ margin: '80px 16px 20px' }}>
                                    <div>
                                        <div tabIndex="0" role="button" aria-describedby="rbd-hidden-text-2-hidden-text-4" data-rbd-drag-handle-draggable-id="draggableItem_3739285390" data-rbd-drag-handle-context-id="2" draggable="false" data-rbd-draggable-context-id="2" data-rbd-draggable-id="draggableItem_3739285390">
                                            <li class="MuiListItem-root MuiListItem-gutters css-vvazg8">
                                                <div class="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-qy2th" tabIndex="0" role="button" aria-label="empty">
                                                    <div class="MuiListItemIcon-root css-1f8bwsm">
                                                        <div class="MuiBox-root css-0" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', backgroundColor: 'rgb(239, 248, 255)', padding: '4px 8px', borderRadius: '8px', justifyContent: 'space-between' }}>
                                                            <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.33329 1.33333C1.1444 1.33333 0.985959 1.26933 0.857959 1.14133C0.730404 1.01378 0.666626 0.855556 0.666626 0.666667C0.666626 0.477778 0.730404 0.319333 0.857959 0.191333C0.985959 0.0637776 1.1444 0 1.33329 0H10.6666C10.8555 0 11.0137 0.0637776 11.1413 0.191333C11.2693 0.319333 11.3333 0.477778 11.3333 0.666667C11.3333 0.855556 11.2693 1.01378 11.1413 1.14133C11.0137 1.26933 10.8555 1.33333 10.6666 1.33333H1.33329ZM1.33329 4C1.1444 4 0.985959 3.936 0.857959 3.808C0.730404 3.68044 0.666626 3.52222 0.666626 3.33333C0.666626 3.14444 0.730404 2.986 0.857959 2.858C0.985959 2.73044 1.1444 2.66667 1.33329 2.66667H6.66662C6.85551 2.66667 7.01396 2.73044 7.14196 2.858C7.26951 2.986 7.33329 3.14444 7.33329 3.33333C7.33329 3.52222 7.26951 3.68044 7.14196 3.808C7.01396 3.936 6.85551 4 6.66662 4H1.33329Z" fill="#2272AF"></path>
                                                            </svg>
                                                            <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: 'bold', color: 'rgb(34, 114, 175)', fontSize: '11px', paddingLeft: '8px' }}>0</p>
                                                        </div>
                                                    </div>
                                                    <div class="MuiListItemText-root css-1tsvksn">
                                                        <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ minHeight: '40px', lineHeight: '40px', color: 'rgb(0, 82, 204', fontWeight: '500', fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', opacity: '0.5', fontStyle: 'italic' }}>제목 없음</p>
                                                    </div>
                                                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                                </div>
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                                <div class="MuiBox-root css-0" style={{ margin: '10px 16px', paddingBottom: '10%' }}>
                                    <div class="MuiBox-root css-0">
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-104rrqu" tabindex="0" type="button">
                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddCircleOutlinedIcon" style={{ color: 'rgb(66, 82, 110)', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                                            </svg>
                                            <p class="MuiTypography-root MuiTypography-body1 css-ozdz0e">추가하기</p>
                                            <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                        </button>
                                        <hr class="MuiDivider-root MuiDivider-fullWidth css-cx417z" />
                                        <div class="MuiPaper-root MuiPaper-elevation sMuiPaper-elevation0 MuiAccordion-root Mui-expanded css-xqhq9l">
                                            <div class="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded css-1q5grb" tabindex="0" role="button" aria-expanded="true">
                                                <div class="MuiAccordionSummary-content Mui-expanded css-1n11r91">
                                                    <div class="MuiBox-root css-1bsnnbm">
                                                        <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontWeight: '500' }}>Endings</p>
                                                        <div class="MuiBox-root css-k008qs">
                                                            <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-12zyo4q">
                                                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1sonui6" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddBoxIcon">
                                                                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                                                                </svg>
                                                                <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr" style={{ minHeight: '0px' }}>
                                                <div class="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                                                    <div class="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                                                        <div role="region" class="MuiAccordion-region">
                                                            <div class="MuiAccordionDetails-root css-s2yvfd"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="FieldsListDrawer__ColResizer-sc-rlte4u-0 cWIaYp leftColResizer" role="presentation"></div>
                            </div>
                        </div>
                    </div>
                    <div class="MuiContainer-root MuiContainer-maxWidthLg jss1 css-okglv3">
                        <div tabindex="-1" style={{ outline: 'none' }}>
                            <div class="MuiBox-root css-0" style={{ display: 'flex', flexDirection: 'column', padding: '40px', gap: '10px', width: '100%', height: '100%' }}>
                                <div class="MuiBox-root css-kcttjf">
                                    <div class="MuiBox-root css-fxr4xl">
                                        <div class="MuiBox-root css-1szjw0z">
                                            <div class="MuiBox-root css-0" style={{ width: '100%', gap: '40px', display: 'flex', flexDirection: 'column' }}>
                                                <div class="MuiBox-root css-1xdhyk6">
                                                    <p class="MuiTypography-root MuiTypography-body1 css-qisfzi" style={{ fontSize: '12px', fontWeight: '400', letterSpacing: '-0.02rem', color: 'rgb(38, 112, 255)', lineHeight: '12px', minHeight: '12px' }}></p>
                                                    <div class="MuiBox-root css-0">
                                                        <div class="MuiGrid-root MuiGrid-container css-onfdyp">
                                                            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                                <div class="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-multiline css-1xxtoyx">
                                                                    <textarea placeholder="질문을 입력해주세요" class="MuiInputBase-input MuiInputBase-inputMultiline css-10oer18" style={{ height: '24px', overflow: 'hidden' }}></textarea>
                                                                    <textarea aria-hidden="true" class="MuiInputBase-input MuiInputBase-inputMultiline css-10oer18" readonly="" tabindex="-1" style={{ visibility: 'hidden', position: 'absolute', overflow: 'hidden', height: '0px', top: '0px', left: '0px', transform: 'translateZ(0px)', padding: '0px', width: '496px' }}></textarea>
                                                                </div>
                                                            </div>
                                                            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                                                                <div class="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-multiline css-lryuv7">
                                                                    <textarea placeholder="(선택 사항) 설명을 입력하세요" class="MuiInputBase-input MuiInputBase-inputMultiline css-10oer18" style={{ height: '23px', overflow: 'hidden' }}></textarea>
                                                                    <textarea aria-hidden="true" class="MuiInputBase-input MuiInputBase-inputMultiline css-10oer18" readonly="" tabindex="-1" style={{ visibility: 'hidden', position: 'absolute', overflow: 'hidden', height: '0px', top: '0px', left: '0px', transform: 'translateZ(0px)', padding: '0px', width: '496px' }}></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="MuiBox-root css-1oi2cng">
                                                    <div>
                                                        <div class="MuiInputBase-root MuiInputBase-colorPrimary css-2g6513">
                                                            <input autocomplete="off" placeholder="응답을 입력하세요" type="text" class="MuiInputBase-input css-mnn31" value="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="MuiBox-root css-1bvc4cc">
                                                    <button class="css-1c3ey53" style={{ opacity: '1', transform: 'none' }}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <mask id="mask0_12070_64088" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" style={{ maskType: 'alpha' }}>
                                                                <rect width="24" height="24" fill="#D9D9D9"></rect></mask>
                                                            <g mask="url(#mask0_12070_64088)">
                                                                <path d="M10.0001 12.7751L15.5001 7.3001C15.8001 7.0001 16.1668 6.8501 16.6001 6.8501C17.0334 6.8501 17.4001 7.0001 17.7001 7.3001C18.0001 7.6001 18.1501 7.96676 18.1501 8.4001C18.1501 8.83343 18.0001 9.2001 17.7001 9.5001L11.1251 16.1001C10.8084 16.4168 10.4334 16.5751 10.0001 16.5751C9.56676 16.5751 9.19176 16.4168 8.8751 16.1001L6.3001 13.5001C6.0001 13.2001 5.8501 12.8334 5.8501 12.4001C5.8501 11.9668 6.0001 11.6001 6.3001 11.3001C6.6001 11.0001 6.96676 10.8501 7.4001 10.8501C7.83343 10.8501 8.2001 11.0001 8.5001 11.3001L10.0001 12.7751Z" fill="#FFFFFF"></path>
                                                            </g>
                                                        </svg>
                                                        <p class="MuiTypography-root MuiTypography-body1 css-10q16nc">OK</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KAKAQ;