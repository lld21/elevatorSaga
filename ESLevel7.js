{
   
    
    init: function(elevators, floors) {
        
        var floor7u = 0;
        var floor6u = 0;
        var floor5u = 0;
        var floor4u = 0;
        var floor3u = 0;
        var floor2u = 0;
        var floor1u = 0;
        var floor0u = 0;

        var floor7d = 0;
        var floor6d = 0;
        var floor5d = 0;
        var floor4d = 0;
        var floor3d = 0;
        var floor2d = 0;     
        var floor1d = 0;
        var floor0d = 0;
        
        floors.forEach(x => {
            x.on("up_button_pressed", function() {
                // Maybe tell an elevator to go to this floor?


                if(x.floorNum() == 7)
                {
                    floo73u++; 
                    // elevator.goToFloor(3);
                    console.log("pressed");
                }
                if(x.floorNum() == 6)
                {
                    floor6u++; 
                    // elevator.goToFloor(3);
                    console.log("pressed");
                }
                if(x.floorNum() == 5)
                {
                    floor5u++; 
                    // elevator.goToFloor(3);
                    console.log("pressed");
                }
                if(x.floorNum() == 4)
                {
                    floor4u++; 
                    // elevator.goToFloor(3);
                    console.log("pressed");
                }
                if(x.floorNum() == 3)
                {
                    floor3u++; 
                    // elevator.goToFloor(3);
                    console.log("pressed");
                }
                else if(x.floorNum() ==2){
                    floor2u++;
                    // elevator.goToFloor(2);
                    console.log("pressed");
                }
                else if(x.floorNum() ==1){
                    floor1u++;
                    //elevator.goToFloor(1);
                    console.log("pressed");
                }
                else if(x.floorNum() ==0){
                    floor0u++;
                    //elevator.goToFloor(0);
                    console.log("pressed");
                }

            })
            x.on("down_button_pressed", function() {
                // Maybe tell an elevator to go to this floor?

                if(x.floorNum() == 7){
                    floor7d++;
                    //elevator.goToFloor(4);
                    console.log("pressed");

                }
                if(x.floorNum() == 6){
                    floor6d++;
                    //elevator.goToFloor(4);
                    console.log("pressed");

                }
                if(x.floorNum() == 5){
                    floor5d++;
                    //elevator.goToFloor(4);
                    console.log("pressed");

                }
                if(x.floorNum() == 4){
                    floor4d++;
                    //elevator.goToFloor(4);
                    console.log("pressed");

                }
                else if(x.floorNum() == 3){
                    floor3d++;
                    //elevator.goToFloor(3);
                    console.log("pressed");

                }
                else if(x.floorNum() ==2){
                    floor2d++;
                    //elevator.goToFloor2;
                    console.log("pressed");

                }
                else if(x.floorNum() ==1){
                    floor1d++;
                    //elevator.goToFloor(1);
                    console.log("pressed");
                }

            });

            
        })
       
        
        
        elevators.forEach(x => {
            // Whenever the elevator is idle (has no more queued destinations) ...
            x.on("idle", function() {
                // let's go to all the floors (or did we forget one?)
                if(elevators[0] == x){
                    if(x.getPressedFloors().length == 0){
                        if(x.loadFactor > .65){x.goToFloor(3);}
                        if(x.loadFactor > .65){x.goToFloor(4);}
                        if(x.loadFactor > .65){x.goToFloor(5);}
                        
                    }
                    else
                    {
                        x.getPressedFloors().forEach(y => {
                            x.goToFloor(y, true)
                        })
                    }
                   
                }
                else{
                    
                    if(x.getPressedFloors().length == 0){
                        if(x.loadFactor > .65){x.goToFloor(0);}
                        if(x.loadFactor > .65) {x.goToFloor(1);}
                        if(x.loadFactor > .65){x.goToFloor(2);}
                       
                    }
                    else
                    {
                        x.getPressedFloors().forEach(y => {
                            x.goToFloor(y, true)
                        })
                    }
                }
            });
        })
      
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
