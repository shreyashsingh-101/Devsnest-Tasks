// 1. Create 2 object and try to use call, apply and bind on them.

const object1 = {
  f_name: "Shreyash",
  l_name: "Singh",
  p_name: function (a, b) {
    console.log(this.f_name + " " + this.l_name);
    console.log(a + b);
  },
};

const object2 = {
  f_name: "Uncle",
  l_name: "Sam",
};

object1.p_name(1, 2);

object1.p_name.call(object2, 1, 3);

object1.p_name.apply(object2, [1, 4]);

let get_ob2 = object1.p_name.bind(object2, 1, 6);

console.log(get_ob2);

get_ob2();

// 2. Try to use different events on objects.

const obj_events = {
  loaded: () => {
    console.log("Window loaded.");
  },
  click: () => {
    console.log("Clicked.");
  },
  dblclick: () => {
    console.log("Double Clicked.");
  },
  wheel: () => {
    console.log("Wheel Used.");
  },
};



window.onload = obj_events.loaded();



//  Click, Double Click and use mouse wheel to see it logged in console.   


seats.forEach((seat) => {
    seat.addEventListener('click', (e) => {
      obj_events.click();
      console.log(e.timeStamp);
    });
    seat.addEventListener('dblclick', () => {
      obj_events.dblclick();
    });
    seat.addEventListener('wheel', () => {
      obj_events.wheel();
    });
});