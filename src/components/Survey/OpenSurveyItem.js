import React from "react";
import { Link } from 'react-router-dom';

function OpenSurveyItem(props) {
    return (
        <div>
            <Link class="bg-white py-24 sm:py-32" to={props.path}>
                <article class="flex max-w-full flex-col items-start justify-between">
                    <div class="flex items-center gap-x-4 text-xs">
                        <time datetime="2020-03-16" class="text-gray-500">{props.startdate}</time>
                        <time datetime="2020-03-16" class="text-gray-500">{props.enddate}</time>
                    </div>
                    <div class="flex items-center gap-x-4 text-xs">
                        <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{props.label}</a>
                    </div>
                    <div class="group relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="#">
                                <span class="absolute inset-0"></span>
                                {props.text}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">설문조사에 대한 설명이 들어갈 것입니다. </p>
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
                    </div><br />
                </article>
            </Link>
        </div>
    );
}

export default OpenSurveyItem;