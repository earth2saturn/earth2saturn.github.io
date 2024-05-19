document.addEventListener('DOMContentLoaded', () => {
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');
    const codeInput = document.getElementById('codeInput');
    const codeButton = document.getElementById('codeButton');
    const startButton = document.getElementById('startButton');

    const secretCode = "SECRET123"; // Define the secret code

    const story = {
        start: {
            text: "You are a detective in a bustling city. You've received a tip-off about a notorious criminal. You can either go to the docks where they were last seen or head to their known hideout.",
            choices: [
                { text: "Go to the docks", next: "docks" },
                { text: "Go to the hideout", next: "hideout" }
            ]
        },
        docks: {
            text: "At the docks, you find some clues pointing towards an old warehouse. Do you want to enter the warehouse or investigate the area further?",
            choices: [
                { text: "Enter the warehouse", next: "warehouse" },
                { text: "Investigate further", next: "investigateDocks" },
                { text: "Go back to the hideout", next: "hideout" }
            ]
        },
        hideout: {
            text: "At the hideout, it's eerily quiet. You find a map with several marked locations. Do you want to check the basement or follow the map to a new location?",
            choices: [
                { text: "Check the basement", next: "basement" },
                { text: "Follow the map", next: "mapLocation" },
                { text: "Go back to the docks", next: "docks" }
            ]
        },
        warehouse: {
            text: "Inside the warehouse, you find a hidden passage. You hear footsteps approaching. Do you hide or confront the person?",
            choices: [
                { text: "Hide", next: "hide" },
                { text: "Confront", next: "confront" }
            ]
        },
        investigateDocks: {
            text: "While investigating, you discover a small boat. The engine is still warm. Do you follow the boat's trail or go back to the warehouse?",
            choices: [
                { text: "Follow the boat's trail", next: "boatTrail" },
                { text: "Go back to the warehouse", next: "warehouse" }
            ]
        },
        basement: {
            text: "In the basement, you find a secret tunnel leading to the city sewer system. It's dark and dangerous. Do you enter the tunnel or go back up?",
            choices: [
                { text: "Enter the tunnel", next: "tunnel" },
                { text: "Go back up", next: "hideout" }
            ]
        },
        mapLocation: {
            text: "Following the map, you arrive at an abandoned factory. There are signs of recent activity. Do you sneak in or call for backup?",
            choices: [
                { text: "Sneak in", next: "sneakIn" },
                { text: "Call for backup", next: "backup" }
            ]
        },
        hide: {
            text: "You hide behind some crates and see the criminal. They haven't noticed you yet. Do you wait for them to leave or try to capture them now?",
            choices: [
                { text: "Wait", next: "wait" },
                { text: "Capture", next: "capture" }
            ]
        },
        confront: {
            text: "You confront the person, but it turns out to be a decoy. The real criminal escapes. Do you chase after them or call for reinforcements?",
            choices: [
                { text: "Chase", next: "chase" },
                { text: "Call for reinforcements", next: "reinforcements" }
            ]
        },
        boatTrail: {
            text: "Following the boat's trail, you reach a small island. There’s a hut in the middle. Do you approach the hut or observe from a distance?",
            choices: [
                { text: "Approach the hut", next: "hut" },
                { text: "Observe from a distance", next: "observe" }
            ]
        },
        tunnel: {
            text: "In the tunnel, you find evidence that the criminal was here recently. The tunnel splits into two paths. Do you take the left or right path?",
            choices: [
                { text: "Left path", next: "leftPath" },
                { text: "Right path", next: "rightPath" }
            ]
        },
        sneakIn: {
            text: "Sneaking in, you manage to catch the criminal off guard. You successfully apprehend them and complete your mission!",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        backup: {
            text: "Backup arrives and you surround the factory. The criminal is captured without any resistance. Mission accomplished!",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        wait: {
            text: "You wait patiently and the criminal eventually leaves. You follow them discreetly and manage to capture them at a less crowded place. Well done!",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        capture: {
            text: "You try to capture the criminal but they fight back fiercely. You manage to subdue them but get injured in the process. Mission accomplished, but at a cost.",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        chase: {
            text: "You chase the criminal through the streets and finally catch them. It's a thrilling pursuit but you manage to bring them to justice.",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        reinforcements: {
            text: "Reinforcements arrive and together you corner the criminal. They surrender without a fight. Another job well done.",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        hut: {
            text: "You approach the hut and find the criminal inside. They try to flee but you manage to apprehend them. Good work!",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        observe: {
            text: "You observe from a distance and gather crucial evidence. Later, you call for backup and the criminal is captured without any issue.",
            choices: [
                { text: "Restart", next: "start" }
            ]
        }
    };

    function displayStory(node) {
        storyElement.innerText = story[node].text;
        choicesElement.innerHTML = '';
        story[node].choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice.text;
            button.className = 'button';
            button.addEventListener('click', () => displayStory(choice.next));
            choicesElement.appendChild(button);
        });
    }

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        codeInput.style.display = 'block';
        codeButton.style.display = 'block';
        displayStory('start');
    });

    codeButton.addEventListener('click', () => {
        const enteredCode = codeInput.value;
        if (enteredCode === secretCode) {
            alert('Code accepted!');
        } else {
            alert('Incorrect code.');
        }
    });
});
