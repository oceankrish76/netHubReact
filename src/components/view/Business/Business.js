import React from 'react'

export default function Business() {
    return (
        <div className="container">
            <div class="row mb-5 align-items-st">
                <div class="col-md-5">
                    <div class="heading-20219">
                        <h2 class="title text-cursive mb-4">Featured Cause</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore officiis nemo, mollitia vero consequuntur quos alias id, ratione quia iusto.</p>
                        <p>Blanditiis asperiores facere deleniti non fugit. Itaque facere nam soluta, incidunt molestias unde iure, optio, ex dolores sint voluptatum. Repellat.</p>
                        <p>Obcaecati voluptates velit animi quos error, necessitatibus magnam possimus rem recusandae delectus placeat odio mollitia quis. Officiis possimus facere laborum.</p>
                        <p><a href="#" class="btn btn-primary rounded-0 px-4">Donate Now</a></p>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="cause shadow-sm">

                        <a href="#" class="cause-link d-block">
                            <img src="images/img_1.jpg" alt="Image" class="img-fluid" />
                            <div class="custom-progress-wrap">
                                <span class="caption">80% complete</span>
                                <div class="custom-progress-inner">
                                    <div class="custom-progress bg-danger" style={{ width: "80%" }}></div>
                                </div>
                            </div>
                        </a>

                        <div class="px-3 pt-3 border-top-0 border border shadow-sm">
                            <span class="badge-danger py-1 small px-2 rounded mb-3 d-inline-block">School</span>
                            <h3 class="mb-4"><a href="#">Alias Odit Ipsam Quas Unde Obcaecati</a></h3>
                            <div class="border-top border-light border-bottom py-2 d-flex">
                                <div>Donated</div>
                                <div class="ml-auto"><strong class="text-primary">$32,919</strong></div>
                            </div>

                            <div class="py-4">
                                <div class="d-flex align-items-center">
                                    <img src="images/person_1.jpg" alt="Image" class="rounded-circle mr-3" width="50" />
                                    <div class="">James Smith</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
