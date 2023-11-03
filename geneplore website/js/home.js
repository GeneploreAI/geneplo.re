const checkbox = document.querySelector('.checkbox');

const links = document.querySelectorAll('.nav_link');
const p = document.querySelectorAll('p');

const h = document.querySelectorAll("h1")
const span = document.querySelectorAll("#titleSpan")

function handleCheckboxChange() {
    if (checkbox.checked) {
        links.forEach(link => {
            link.style.color = 'white';
            link.style.transition = '1.5s';
        });
    } else {
        links.forEach(link => {
            link.style.color = 'gray';
            link.style.transition = '1.5s';
        });
    }

    if (checkbox.checked) {
        p.forEach(p => {
            p.style.color = 'white';
            p.style.transition = '1.5s';
        });
    } else {
        p.forEach(p => {
            p.style.color = 'gray';
            p.style.transition = '1.5s';
        });
    }

    if (checkbox.checked) {
        h.forEach(title => {
            title.style.color = 'white';
            title.style.transition = '1.5s';
        });
    } else {
        h.forEach(title => {
            title.style.color = '#4940a7';
            title.style.transition = '1.5s';
        });
    }

    if (checkbox.checked) {
        span.forEach(marked => {
            marked.style.color = '#b3b3b3';
            marked.style.transition = '1.5s';
        });
    } else {
        span.forEach(marked => {
            marked.style.color = '#25275a';
            marked.style.transition = '1.5s';
        });
    }
}