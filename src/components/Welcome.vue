<script>

</script>

<template>
    <div id="description">
        <img id="face" src="../assets/face.png" />
        <h1 class="descText">Bienvenue sur mon Portfolio</h1>
        <h2 class="descText">Salut c'est Maddy Daubanton, dev web junior, vous pourrez trouver mes differentes créations
            ! C'est tout ce que je fais en ce moment.</h2>
    </div>

    <div id="carrousel">
        <div id="creations">
            <div class="row">
                <div class="column ">
                    <div class="creation">
                        <h1 class="textCreation">BadeBot</h1>
                        <img id="badebot" src="../assets/creations/badebot.jpg">
                    </div>
                </div>
                <div class="column ">
                    <div class="creation">
                        <h1 class="textCreation">3D Modeling</h1>
                        <img id="donut" src="../assets/creations/donut.gif">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column ">
                    <div class="creation">
                        <h1 class="textCreation">Streaming</h1>
                        <img id="stream" src="../assets/creations/stream.gif">
                    </div>
                </div>
                <div class="column ">
                    <div class="creation">
                        <h1 class="textCreation">Shitposting</h1>

                        <img id="shitpost" src="../assets/creations/shitpost.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #272727;
    color: white;
    text-align: center;
    font-family: Raleway;
}

.descText {
    padding-left: 20%;
    padding-right: 20%;
}

#face {
    width: 200px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0 0 10px white;
}

#carrousel {
    background-color: #272727;
    padding-left: 20%;
    padding-right: 20%;
}

#creations {
    padding: 15px;

}

.textCreation {
    position: absolute;
    bottom: -10px;
    left: 15px;
    z-index: 2;
    font-family: Raleway;
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
    flex: 1;
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
    display:inline-block;
}

.creation:after {
    content:'';
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    display:inline-block;

    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
}

.creation:hover {
    transition: all .3s ease-in;
    transform: scale(1.2);
    z-index: 3;
}

.creation img {
    width: 500px;
    display:block;
    height: auto;
}
</style>