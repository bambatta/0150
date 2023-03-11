<template>
    <div class="container max-w-3xl mx-auto px-4 py-3.5">
        <div class="profile">
            <div class="profile__info flex flex-col">
                <div class="profile__about w-full">
                    <div class="profile__haeding ml-[8.125rem]">
                        <h3 class="profile__heading-name text-base leading-5 pt-1.5 font-bold ">Eva Jonson</h3>
                        <p class="profile__haeding-profession text-xs text-gray-400 font-normal leading-5">Sales Manager</p>
                    </div>

                </div>
                <div class="profile__about-block flex mt-2 relative">
                    <div class="profile__avatar w-max ">
                        <img src="/img/avatar.jpg" alt="avatar" class="max-w-[124px] rounded-full absolute -top-14">
                    </div>
                    <p
                        class="profile__about-text text-sm font-normal p-1 bg-yellow-100 h-full w-full ml-8 pl-24 rounded-md border-solid border-gray-300 border-[1px]">
                        I will find the best offers for you. <br />
                        My services are absolutely free.
                    </p>
                </div>
            </div>
            <div class="services flex flex-col items-end mt-4 ml-[8.125rem]">
                <h5 class="services__head text-sm text-gray-700 pb-2 xs:pr-[12%]">
                    Services
                </h5>
                <div
                    class="services__units flex flex-col gap-[2px] border-gray-300 border-solid border-b-[1px] border-t-[1px] w-full pt-4 pb-4 xs:pr-[12%]">
                    <div class="services__units-item flex justify-between">
                        <div class="relative w-full">
                            <p class="services__units-text text-sm font-normal pl-2 w-full absolute left-0 top-0.5 z-50">
                                Manual tour booking</p>
                            <div class="bar relative w-[90%] h-6 bg-green-100 rounded"></div>
                        </div>
                        <span class="services__units-quantity text-sm font-bold">11</span>
                    </div>
                    <div class="services__units-item flex justify-between">
                        <div class="relative w-full">
                            <p class="services__units-text text-sm font-normal pl-2 w-full absolute left-0 top-0.5 z-50">
                                Package tours</p>
                            <div class="bar relative w-[20%] h-6 bg-blue-100 rounded"></div>
                        </div>
                        <span class="services__units-quantity text-sm font-bold">3</span>
                    </div>
                    <div class="services__units-item flex justify-between">
                        <div class="relative w-full">
                            <p class="services__units-text text-sm font-normal pl-2 w-full absolute left-0 top-0.5 z-50">
                                Hotels</p>
                            <div class="bar relative w-[13%] h-6 bg-blue-100 rounded"></div>
                        </div>
                        <span class="services__units-quantity text-sm font-bold">1</span>
                    </div>
                </div>
                <div class="services__total flex justify-between w-full pt-2 xs:pr-[12%]">
                    <div class="services__total-text font-bold">
                        Total
                    </div>
                    <span class="services__units-sum font-bold">15</span>
                </div>
            </div>
            <div class="reviews mt-4 flex flex-col">
                <div class="reviews__heading flex justify-between">
                    <div class="reviews__head flex items-center gap-2">
                        <h3 class="reviews__head-text text-base leading-5 font-bold">
                            Latest reviews
                        </h3>
                        <button @click="getAllReviews" class="reviews__head-btn text-sm cursor-pointer	text-blue-700 underline">
                            All reviews
                        </button>
                    </div>
                    <div class="reviews__icons flex gap-4">
                        <div class="reviews__icons-item flex gap-1 items-center">
                            <img src="/img/icons/like.svg" alt="like">
                            <span class="text-xs font-normal">131</span>
                        </div>
                        <div class="reviews__icons-item flex gap-1 items-center">
                            <img src="/img/icons/comment.svg" alt="like">
                            <span class="text-xs font-normal">{{ comments.length }}</span>
                        </div>
                    </div>
                </div>
                    <ul class="reviews__list flex flex-col gap-4 mt-3 max-h-[300px] overflow-y-auto">
                    <li v-for="(comment, index) in commentsToShow" :key="index" class="reviews__list-item flex flex-col gap-2">
                        <div class="reviews__item-heading flex items-center gap-2">
                            <h5 class="reviews__item-name text-sm font-bold">{{ comment.name }}</h5>
                            <p class="reviews__item-date text-xs font-normal text-gray-400">{{ comment.data }}</p>
                        </div>
                        <div
                            class="reviews__comment py-2.5 px-5 bg-blue-50 border-solid border-gray-300 border-[1px] relative">
                            <div
                                class="absolute -top-[8px] w-2 h-2 bg-blue-50 border-solid border-l-gray-300 border-l-[1px] ">
                            </div>
                            <div
                                class="absolute -top-[11px] left-[21px] w-[12px] h-2 bg-white border-solid border-b-gray-300 border-b-[1px] rotate-45">
                            </div>
                            <p class="reviews__comment-text font-normal text-sm">
                                {{ comment.text }}
                            </p>
                        </div>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
    <div class="reviews__action pt-5 pb-8 mt-6 bg-gray-100">
        <div class="container max-w-3xl mx-auto px-4 py-3.5">
            <form
            @submit.prevent="onSubmit"
            @keydown.ctrl.enter="onSubmit"
            class="flex flex-col items-center"
            >
                <textarea
                    v-model="reviewInput" 
                    name="comment-text" 
                    class="text-sm font-normal resize-none w-full h-full p-2 border-solid border-[1px] rounded max-h-[63px] focus:outline-none focus:border-[1px] focus:border-2 focus:border-black">
                </textarea>
                <button class="max-w-[281px] w-full py-3 mt-6 bg-yellow-400 rounded-3xl">
                    Send a message
                </button>
            </form>
        </div>
    </div>
</template>


<script setup>
import { ref, reactive } from "vue";
import moment from "moment";

let reviewInput = ref("");
let commentsToShow = ref(null);


let comments = reactive([
    {
        name: "Samuel Jackson",
        data: "13 Apr 2022",
        text: "Hey Eva! You're cool. Nice pic!"
    },
    {
        name: "Angela Deimon",
        data: "10 Apr 2022",
        text: "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic."
    },
    {
        name: "Ronald Harris",
        data: "8 Apr 2022",
        text: "Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?"
    },
    {
        name: "Harry Potter",
        data: "5 Apr 2023",
        text: "Tom Reddle"
    },
]);

// Methods

function getCommentsToShow() {
    commentsToShow.value = comments.slice(0, 3) // default show 3 comments
}


function onSubmit() {
    getCommentsToShow()
    commentsToShow.value.pop() // delete first item of commentsToShow
    const date = new Date();
    const dateNow = moment(date).format('d MMM YYYY') // change date format
    const autohorName = ref('Default User');

    const comment = reactive({
        name: autohorName.value,
        data: dateNow,
        text: reviewInput.value
    })
    
    commentsToShow.value.unshift(comment); // add a new comment to commentsToShow
    comments.unshift(comment); // add a new comment to comments
    reviewInput.value = "";
}

function getAllReviews() {
    commentsToShow.value = comments // get all of the comments
}


getCommentsToShow()


</script>