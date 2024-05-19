document.addEventListener('DOMContentLoaded', () => {
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');

    const story = {
        start: {
            text: "You are a assassin in a bustling city. You've received a mission from your boss, Inguz Rune. Your target is Mercury, but from what you know they're fairly cunning, and probably have a plan prepared. You can either go to the docks where they were last seen or head to their last known hideout.",
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
            text: "At the hideout, it's eerily quiet. You find a mess, like a tornado ran through the hideout. You find a torn map on the ground. Do you want to check the basement or follow the torn map to a new location?",
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
            text: "While investigating, you discover a small boat, with a metallic substance on the inside. Do you set sail or go back to the warehouse?",
            choices: [
                { text: "Set Sail", next: "boatTrail" },
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
            text: "Following the map, you arrive at an abandoned sanctuary. There are vibrant flowers adorning the walls, covering everything in a multicolour hue. Sunlight fades in from a nearby open window. There's signs of activity from here. Do you sneak in or call for backup?",
            choices: [
                { text: "Sneak in", next: "sneakIn" },
                { text: "Call for backup", next: "backup" }
            ]
        },
        hide: {
            text: "You hide behind some crates and see Mercury. They haven't noticed you yet. Do you wait for them to leave or try to capture them now?",
            choices: [
                { text: "Wait", next: "wait" },
                { text: "Capture", next: "capture" }
            ]
        },
        confront: {
            text: "You confront the person, but it turns out to be a decoy. Do you chase after MErcury, trying to find them or call for reinforcements and set up a perimeter?",
            choices: [
                { text: "Chase", next: "chase" },
                { text: "Call for reinforcements", next: "reinforcements" }
            ]
        },
        boatTrail: {
            text: "Setting Sail, you reach a small island. There’s a hut in the middle. Do you approach the hut or observe from a distance?",
            choices: [
                { text: "Approach the hut", next: "hut" },
                { text: "Observe from a distance", next: "observe" }
            ]
        },
        tunnel: {
            text: "In the tunnel, you find a counterfeit token with the intials M.M, Mercury was here recently. The tunnel splits into two paths. Do you take the left or right path?",
            choices: [
                { text: "Left path", next: "leftPath" },
                { text: "Right path", next: "rightPath" }
            ]
        },
        sneakIn: {
            text: "Sneaking in, you manage to catch Mercury off guard. You successfully apprehend them and completed your mission! You return to HQ, only for Inguz rune to throw you to the Red Room. You captured a decoy. You failed. Bad Ending #1.",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        backup: {
            text: "Backup arrives and you surround the factory. Mercury has evaded the perimeter and escaped unharmed. You are punished for your failure. Bad Ending #2",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        wait: {
            text: "You wait patiently and Mercury eventually leaves. You werent meant to let them get away... Bad Ending #3.,
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        capture: {
            text: "You try to capture Mercury but they fight back fiercely. You fight for hours and struggle, but manage to subdue them, getting injured in the process. Mission accomplished, but at what cost? Neutral Ending #1.",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        chase: {
            text: "You chase Mercury through the streets and lose them after 15 minutes. You failed... Bad Ending #4.",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        reinforcements: {
            text: "Reinforcements arrive and together you corner Mercury. They lose the battle and are killed in the process, you won, but couldnt get anything out of them. Neutral Ending #2.",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        hut: {
            text: "You approach the hut and find... nothing, You deserted your post and became marked for death, good job! Desertion Ending #1.,
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        observe: {
            text: "You observe from a distance and gather crucial evidence. Later, you call for backup and Mercury murders the backup with no remorse, you are executed for your incompetence. Bad Ending #5.,
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        leftPath: {
            text: "Taking the left path, you find a hidden room with Mercury, After hours of you talking, she convinces you to join her. You both live in hiding, forming a reluctant bond. Mission Failed. Desertion Ending #2",
            choices: [
                { text: "Restart", next: "start" }
            ]
        },
        rightPath: {
            text: "The right path leads you to a dead end, but you find valuable evidence that helps you, after 2 days of hunting, and several hours of planning, you finally caught mercury and brought him back to Inguz Rune, Mercury is no more, You win. True/Good Ending.",
            choices: [
                { text: "Restart.", next: "start" }
            ]
        }
    };

    function updateStory(node) {
        storyElement.textContent = node.text;
        choicesElement.innerHTML = "";
        node.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.classList.add('button');
            button.addEventListener('click', () => {
                updateStory(story[choice.next]);
            });
            choicesElement.appendChild(button);
        });
    }

    updateStory(story.start);
