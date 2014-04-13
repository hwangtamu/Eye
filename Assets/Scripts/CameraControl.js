#pragma strict
var Cam1:Camera;
var Cam2:Camera;
var Cam3:Camera;
Cam2.enabled = false;
Cam3.enabled = false;
function Start () {

}

function Update () {
	if(Input.GetKeyDown("1")){
          Cam1.enabled = true;
          Cam2.enabled = false;
          Cam3.enabled = false;
     }
     if(Input.GetKeyDown("2")){
          Cam1.enabled = false;
          Cam2.enabled = true;
          Cam3.enabled = false;
     }
     if(Input.GetKeyDown("3")){
          Cam1.enabled = false;
          Cam2.enabled = false;
          Cam3.enabled = true;
     }
}