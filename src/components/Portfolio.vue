<script setup>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

const isBadeOpen = ref(false)
const is3dOpen = ref(false)
const isStreamOpen = ref(false)
const isShitpostOpen = ref(false)

function closeBadeModal() {
    isBadeOpen.value = false
}
function openBadeModal() {
    isBadeOpen.value = true
}
function close3dModal() {
    is3dOpen.value = false
}
function open3dModal() {
    is3dOpen.value = true
}
function closeStreamModal() {
    isStreamOpen.value = false
}
function openStreamModal() {
    isStreamOpen.value = true
}
function closeShistpostModal() {
    isShitpostOpen.value = false
}
function openShistpostModal() {
    isShitpostOpen.value = true
}
</script>

<template>
    <div id="description">
        <img id="face" alt="Le visage de Maddy" src="../assets/face.png">
        <h1 class="descText">Welcome on my Portfolio</h1>
        <h2 class="descText">My name is Madeline Daubanton, and I'm currently 21 years old. I call a small apartment my home, where I passionately craft various creations for people to discover. I genuinely hope you derive enjoyment from them.</h2>
    </div>

    <div id="carrousel">
        <div id="creations">
            <div class="row">
                <div class="column ">
                    <div class="creation" @click="openBadeModal">
                        <TransitionRoot appear :show="isBadeOpen" as="template">
                            <Dialog as="div" @close="closeBadeModal" class="relative z-10">
                                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                                    leave-to="opacity-0">
                                    <div class="fixed inset-0 bg-black/25" />
                                </TransitionChild>

                                <div class="fixed inset-0 overflow-y-auto">
                                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                                        <TransitionChild as="template" enter="duration-300 ease-out"
                                            enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                                            leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                                            leave-to="opacity-0 scale-95">
                                            <DialogPanel class="modalPanel">
                                                <DialogTitle as="h3" class="text-3xl font-medium leading-6 text-white">
                                                    BadeBot
                                                </DialogTitle>
                                                <div class="mt-2">
                                                    <p class="text-base text-gray-100">During 2022, I embarked on the development of a Discord bot with a primary goal of bringing laughter through what's commonly known as "shitposting." This bot was meticulously crafted using JavaScript, specifically powered by Node.js, and it made extensive use of the DiscordJS V14 library.</p>
                                                    <p class="text-xl"><i class="fa-brands fa-js text-yellow-500"></i>
                                                        <i class="fa-brands fa-node text-green-500"></i> <i
                                                            class="fa-brands fa-discord text-blue-400"></i>
                                                    </p>
                                                    <div class="modalImages">
                                                        <img id="badebot"
                                                            alt="Conversation Discord entre BadeBot et un utilisateur"
                                                            src="../assets/creations/badebot.jpg">
                                                    </div>

                                                    <a href="https://github.com/Minkavi/BadeBot" target="_blank"><button
                                                            type="button" class="modalGitBtn">Lien du Repo</button></a>
                                                </div>

                                                <div class="mt-4">
                                                    <button type="button" class="modalCloseBtn" @click="closeBadeModal">
                                                        Fermer
                                                    </button>
                                                </div>
                                            </DialogPanel>
                                        </TransitionChild>
                                    </div>
                                </div>
                            </Dialog>
                        </TransitionRoot>
                        <h1 class="textCreation">BadeBot</h1>
                        <img id="badebot" alt="Conversation Discord entre BadeBot et un utilisateur"
                            src="../assets/creations/badebot.jpg">
                    </div>
                </div>
                <div class="column ">
                    <div class="creation" @click="open3dModal">
                        <TransitionRoot appear :show="is3dOpen" as="template">
                            <Dialog as="div" @close="close3dModal" class="relative z-10">
                                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                                    leave-to="opacity-0">
                                    <div class="fixed inset-0 bg-black/25" />
                                </TransitionChild>

                                <div class="fixed inset-0 overflow-y-auto">
                                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                                        <TransitionChild as="template" enter="duration-300 ease-out"
                                            enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                                            leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                                            leave-to="opacity-0 scale-95">
                                            <DialogPanel class="modalPanel">
                                                <DialogTitle as="h3" class="text-3xl font-medium leading-6 text-white">
                                                    3D Modeling
                                                </DialogTitle>
                                                <div class="mt-2">
                                                    <p class="text-base text-gray-100">Out of sheer boredom one day, I delved into the world of 3D modeling. I quickly fell in love with the incredible ability to fashion things from the ground up and eagerly share them with the world.<br>
                                                        <i class="fa-solid fa-cube text-xl text-orange-500"></i> Blender
                                                    </p>
                                                    <div class="modalImages"><img id="donut"
                                                            alt="Une image animée d'un donut"
                                                            src="../assets/creations/donut.gif">
                                                        <img id="watermachine"
                                                            alt="Une image d'un distributeur à boisson"
                                                            src="../assets/creations/watermachine.jpg">
                                                    </div>
                                                </div>

                                                <div class="mt-4">
                                                    <button type="button" class="modalCloseBtn" @click="close3dModal">
                                                        Fermer
                                                    </button>
                                                </div>
                                            </DialogPanel>
                                        </TransitionChild>
                                    </div>
                                </div>
                            </Dialog>
                        </TransitionRoot>
                        <h1 class="textCreation">3D Modeling</h1>
                        <img id="donut" alt="Une image animée d'un donut" src="../assets/creations/donut.gif">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column ">
                    <div class="creation" @click="openStreamModal">
                        <TransitionRoot appear :show="isStreamOpen" as="template">
                            <Dialog as="div" @close="closeStreamModal" class="relative z-10">
                                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                                    leave-to="opacity-0">
                                    <div class="fixed inset-0 bg-black/25" />
                                </TransitionChild>

                                <div class="fixed inset-0 overflow-y-auto">
                                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                                        <TransitionChild as="template" enter="duration-300 ease-out"
                                            enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                                            leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                                            leave-to="opacity-0 scale-95">
                                            <DialogPanel class="modalPanel">
                                                <DialogTitle as="h3" class="text-3xl font-medium leading-6 text-white">
                                                    Twitch Streaming
                                                </DialogTitle>
                                                <div class="mt-2">
                                                    <p class="text-base text-gray-100">Since 2021, I've been running a streaming channel with a current following of 300 dedicated fans. I consistently host streams twice a week, focusing primarily on video games, but occasionally spicing things up with talk shows featuring special guests!<br>
                                                        <i class="fa-brands fa-twitch text-xl text-purple-500"></i>
                                                    </p>
                                                    <div class="modalImages"><img id="stream"
                                                            alt="Extrait de stream de Maddy"
                                                            src="../assets/creations/stream.gif">
                                                    </div>
                                                    <a class="modalTwitchBtn " href="https://www.twitch.tv/mady2ouf"
                                                        target="_blank">Lien du Twitch </a>
                                                </div>

                                                <div class="mt-4">
                                                    <button type="button" class="modalCloseBtn"
                                                        @click="closeStreamModal">
                                                        Fermer
                                                    </button>
                                                </div>
                                            </DialogPanel>
                                        </TransitionChild>
                                    </div>
                                </div>
                            </Dialog>
                        </TransitionRoot>
                        <h1 class="textCreation">Streaming</h1>
                        <img id="stream" alt="Extrait de stream de Maddy" src="../assets/creations/stream.gif">
                    </div>
                </div>
                <div class="column" >
                    <div class="creation" @click="openShistpostModal">
                        <TransitionRoot appear :show="isShitpostOpen" as="template">
                            <Dialog as="div" @close="closeShistpostModal" class="relative z-10">
                                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                                    leave-to="opacity-0">
                                    <div class="fixed inset-0 bg-black/25" />
                                </TransitionChild>

                                <div class="fixed inset-0 overflow-y-auto">
                                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                                        <TransitionChild as="template" enter="duration-300 ease-out"
                                            enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                                            leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                                            leave-to="opacity-0 scale-95">
                                            <DialogPanel class="modalPanel">
                                                <DialogTitle as="h3" class="text-3xl font-medium leading-6 text-white">
                                                    SHITPOST
                                                </DialogTitle>
                                                <div class="mt-2">
                                                    <p class="text-base text-gray-100">One day while scrolling through Twitter, I came across an account named BeaufDelphine and I fell in love with their humour. So much I started doing my own shitposts creations. <br>
                                                        <i class="fa-brands fa-twitter"></i> <i
                                                            class="fa-brands fa-x-twitter"></i>
                                                    </p>
                                                    <div class="modalImages"><img id="shitpost"
                                                            alt="Image d'un gros Luma avec écrit 'Elle a déjà mangée et elle mange avec nous'"
                                                            src="../assets/creations/shitpost.jpg">
                                                    </div>
                                                    <a class="modalTwitterBtn " href="https://www.twitter.com/mady2ouf"
                                                        target="_blank">Lien du compte </a>
                                                </div>

                                                <div class="mt-4">
                                                    <button type="button" class="modalCloseBtn"
                                                        @click="closeShistpostModal">
                                                        Fermer
                                                    </button>
                                                </div>
                                            </DialogPanel>
                                        </TransitionChild>
                                    </div>
                                </div>
                            </Dialog>
                        </TransitionRoot>
                        <h1 class="textCreation">Shitposting</h1>

                        <img id="shitpost"
                            alt="Image d'un gros Luma avec écrit 'Elle a déjà mangée et elle mange avec nous'"
                            src="../assets/creations/shitpost.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="contactForm">

    </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 102px;
    background-image: linear-gradient(to top, rgba(20, 20, 20, 1) 10%, rgba(0, 0, 0, 0)),
        url("../assets/fond.png");
    color: white;
    text-align: center;
    font-family: Raleway;
    scroll-behavior: smooth;
}

#description h1 {
    font-size:3em;
    font-weight: bold;
}

#description h2 {
    font-size: 2em;
}


.descText {
    padding-left: 20%;
    padding-right: 20%;
}

#face {
    width: 13em;
    height: 13em;
    border-radius: 2em;
    box-shadow: 0 0 10px white;
}

#carrousel {
    background-color: #141414;
    padding-left: 20%;
    padding-right: 20%;
    margin-bottom: 2em;
    scroll-behavior: smooth;
}

#creations {
    padding: 1.5rem;
}

.modalPanel {
    overflow: hidden;
    padding: 1.5rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 35rem;
    text-align: left;
    vertical-align: middle;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    background-color: #141414;
}

.textCreation {
    position: absolute;
    bottom: 15px;
    left: 30px;
    z-index: 2;
    font-family: Raleway;
    font-size: 2em;
    font-weight: bold;
}

.modalGitBtn {
    display: inline-flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    justify-content: center;
    border-radius: 9999px;
    border-width: 1px;
    border-color: transparent;
    color: #000000;
    background-color: #ffffff;

}


.modalGitBtn:hover {
    background-color: #E5E7EB;
}

.modalTwitchBtn {
    display: inline-flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    justify-content: center;
    border-radius: 9999px;
    border-width: 1px;
    border-color: transparent;
    color: #ffffff;
    background-color: #8B41F5;

}

.modalTwitchBtn:hover {
    background-color: #a064f3;
}

.modalTwitterBtn {
    display: inline-flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    justify-content: center;
    border-radius: 9999px;
    border-width: 1px;
    border-color: transparent;
    color: #ffffff;
    background-color: #46a5f3;

}

.modalTwitterBtn:hover {
    background-color: #6ab5f3;
}

.modalCloseBtn {
    display: inline-flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: center;
    border-radius: 0.375rem;
    border-width: 1px;
    border-color: transparent;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: #000000;
    background-color: #10B981;
}

.modalCloseBtn:hover {
    background-color: #A7F3D0;
}


.modalImages img {
    border-radius: 1.5rem;
    margin-top: 10px;
    margin-bottom: 10px;
    height: auto;
    width: 30em;
}

.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}

.column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex:1;
}

.creation {
    margin: auto;
    margin-top: 20px;
    position: relative;
    text-align: center;
    color: white;
    z-index: 2;
    transition: all .3s ease-in-out;
    transform: scale(1);
    display: inline-block;
    cursor: pointer;
    
}

.creation:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 90%);
    border-radius: 1.5rem;
}

.creation:hover {
    transition: all .3s ease-in;
    transform: scale(1.2);
    z-index: 3;
    border-radius: 1.5rem;
}


.creation img {
    width: 30em;
    display: block;
    height: auto;
    border-radius: 1.5rem;

}
@media (max-width: 1000px) {

#description h1 {
    font-size:3em;
    font-weight: bold;
}

#description h2 {
    font-size: 1.5em;
}

.column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;

}

#carrousel {
    background-color: #141414;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 2em;
}


}

</style>