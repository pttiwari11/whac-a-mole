
var mole = document.querySelectorAll('.mole');

window.addEventListener('keydown', c => {
    if (c.key == 'c') {
        window.addEventListener('keydown', h => {
            if (h.key == 'h') {
                window.addEventListener('keydown', e => {
                    if (e.key == 'e') {
                        window.addEventListener('keydown', a => {
                            if (a.key == 'a') {
                                window.addEventListener('keydown', t => {
                                    if (t.key == 't') {
                                        mole.forEach(cheat => {
                                            cheat.style.backgroundImage = "url('./Assets/cheat.png')";
                                        });
                                        alert("Cheat Activated!!!")
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
  });