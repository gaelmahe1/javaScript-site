    let home = document.getElementById('home');
    let guest = document.getElementById('guest');

    let homeScore = 0
    let guestScore = 0

    function add1Home() {
    home.textContent = homeScore += 1
    }

    function add2Home() {
    home.textContent = homeScore += 2
    }

    function add3Home() {
    home.textContent = homeScore += 3
    }

    function add1Guest() {
    guest.textContent = guestScore += 1
    }
        
    function add2Guest() {
    guest.textContent = guestScore += 2
    }
        
    function add3Guest() {
    guest.textContent = guestScore += 3
    }

    function resetHome() {
    homeScore = 0
    home.textContent = "0"
    }

    function resetGuest() {
    guestScore = 0
    guest.textContent ="0"
    }