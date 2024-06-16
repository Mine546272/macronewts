import React from "react";
import MenuCard from "../components/MenuCard";
// import fooddummy from "./src/photos/fooddummy1.jpg"; bermasalah tai

const dietFoods = [
    { 
        // img : fooddummy,
        name: "Chiken Avocado salad" ,
        kalori : "476 Kcal",
        waktu : "10 menit"
    },
    { name: "Fresh Tomato & Fruit Salad",
    kalori : "310 Kcal",
    waktu : "10 menit"

     },
    { name: "Blueberry Granola Yogurt" ,
    kalori : "297 Kcal",
    waktu : "10 menit"

    },
    { name: "Avocado and Cheese Salad",
    kalori : "415 Kcal",
    waktu : "10 menit"

     },
    { name: "Freshly made bibimbap",
    kalori : "512 Kcal",
    waktu : "10 menit"

     },
    { name: "Low Calorie Rice Bowl" ,
    kalori : "350 Kcal",
    waktu : "10 menit"

    },
    { name: "Chiken Spicy salad" ,
    kalori : "367 Kcal",
    waktu : "10 menit"

    },
    { name: "Broccoli and Avocado Rice" ,
    kalori : "420 Kcal",
    waktu : "10 menit"

    },
    { name: "Baked Tofu Rice" ,
    kalori : "445 Kcal",
    waktu : "10 menit"

    },
    { name: "Baked Chicken and Corn Rice" ,
    kalori : "460 Kcal",
    waktu : "10 menit"

    },
    { name: "Roast Chicken Salad" ,
    kalori : "510 Kcal",
    waktu : "10 menit"

    },
    { name: "PanFried Salmon Salad" ,
    kalori : "457 Kcal",
    waktu : "10 menit"

    }
  ];
  

export default function MenuList() {
    const foods = dietFoods;
    return(
        <div className="menu-container">
            <ul className="ulmenu">
            {foods.map((food, index) => (
            <li key={index}>
                 <MenuCard name={food.name} img={food.img} kalori={food.kalori} waktu={food.waktu}/>
            </li>
                ) )}
            </ul>
        </div>
        
    )
}