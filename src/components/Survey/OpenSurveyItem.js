import React from "react";
import { Link } from 'react-router-dom';

function OpenSurveyItem(props) {
    return (
        <div>
            <li >
                <Link class="bg-white py-24 sm:py-32" to={props.path}>
                    <div class="mx-auto mt-10 grid max-w-full grid-cols-1 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <article class="flex max-w-full flex-col items-start justify-between">
                            <div class="flex items-center gap-x-4 text-xs">
                                <time datetime="2020-03-16" class="text-gray-500">{props.date}</time>
                                <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{props.label}</a>
                            </div>
                            <div class="group relative">
                                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span class="absolute inset-0"></span>
                                        {props.text}
                                    </a>
                                </h3>
                                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                            </div>
                            <div class="relative mt-8 flex items-center gap-x-4">
                                <img src={props.profile} alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                                <div class="text-sm leading-6">
                                    <p class="font-semibold text-gray-900">
                                        <a href="#">
                                            <span class="absolute inset-0"></span>
                                            {props.name}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    {/* <figure className='surveys__item__pic-wrap' data-category={props.label}>

                    </figure>
                    <div className='surveys__item__info'>
                        <h5 className="surveys__item__text">{props.text}</h5>
                    </div> */}
                </Link>
            </li>
        </div>
    );
}

export default OpenSurveyItem;