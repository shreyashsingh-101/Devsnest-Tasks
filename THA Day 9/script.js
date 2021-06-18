let hall = document.querySelector(".seat_select");

let remaining_seats = document.querySelector('.remaining');
let booked_seats = document.querySelector('.booked');


let x = `<div class="seat">
<div class="seat_upper"></div>
<div class="seat_lower"></div>
</div>`;


let content = "";
for (let i = 0; i < 40; i++) {
  content += x;
}

hall.innerHTML = content;

let seats = document.querySelectorAll('.seat');

let remaining = 40;
let booked = 0;

seats.forEach((seat) => {
    seat.addEventListener('click', () => {
        if(seat.childNodes[1].classList.contains('seat_booked')){
            remaining++;
            booked--;
        }
        else{
            remaining--;
            booked++;
        }
        seat.childNodes[1].classList.toggle('seat_booked');
        seat.childNodes[3].classList.toggle('seat_booked');
        
        remaining_seats.innerText = remaining;
        booked_seats.innerText = booked;
    })
})
