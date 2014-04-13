#pragma strict

function Start () {

}

function Update () {
	if (Input.GetButton("Up") && transform.position.y<3)
		transform.Translate(0,0.0414,0);
	if (Input.GetButton("Down")&& transform.position.y>-3)
		transform.Translate(0,-0.0414,0);
	if (Input.GetButton("Left")&& transform.position.z>-3)
		transform.Translate(0,0,-0.0414);
	if (Input.GetButton("Right")&& transform.position.z<3)
		transform.Translate(0,0,0.0414);
	if (Input.GetButton("Forward")&& transform.position.x<-4)
		transform.Translate(0.0414,0,0);
	if (Input.GetButton("Backward")&& transform.position.x>-29)
		transform.Translate(-0.0414,0,0);
	if (Input.GetButton("LRotation"))
		transform.Rotate(Vector3.right*1);
	if (Input.GetButton("RRotation"))
		transform.Rotate(Vector3.right*(-1));
	if (Input.GetButton("Clear")){
		for(var g : GameObject in GameObject.FindGameObjectsWithTag("Result")){
			Destroy(g);
		}
	}

}
var showText = true;
var textArea = new Rect(0,0,Screen.width, Screen.height);

function OnGUI(){
    if(showText){
    	GUI.Label(textArea,"Object Position: "+(-GameObject.Find("Object").transform.position.x).ToString()+
    	"\nImage Position: "+GameObject.Find("lImage0").transform.position.x.ToString());
    }
}
