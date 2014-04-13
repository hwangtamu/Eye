#pragma strict
var target:GameObject;
var pix:GameObject;
var count = 0;
var x_t = 0.0;
var y_t = 0.0;
var z_t = 0.0;
var z_tt = 0.0;



function Start () {
	GameObject.Find("l_lens").renderer.material.color = Color32(255,255,255,100);
	GameObject.Find("r_lens").renderer.material.color = Color32(255,255,255,100);
	//Pixels
	target = GameObject.Find("Object");
	for(var t:Transform in target.transform){
		
		t.name = "pixel"+ count;
		var cellClone1 = Instantiate(pix,Vector3.zero,Quaternion.identity);
		cellClone1.name = "lImage"+ count;
		cellClone1.tag = "Pixel";
		cellClone1.transform.parent = GameObject.Find("LeftImage").transform;
		var cellClone2 = Instantiate(pix,Vector3.zero,Quaternion.identity);
		cellClone2.name = "rImage"+ count;
		cellClone2.tag = "Pixel";
		cellClone2.transform.parent = GameObject.Find("RightImage").transform;
		count++;
	}
	
}


function Update () {
    
	for(var i=0;i<count;i++){
		var pos = GameObject.Find("pixel"+i).transform.position;
		x_t = 0.7*pos.x/(pos.x+0.7);
		y_t = pos.y*x_t/pos.x;
		z_t = (pos.z-0.3)*x_t/pos.x+0.3;
		z_tt = (pos.z+0.3)*x_t/pos.x-0.3;
		GameObject.Find("rImage"+i).transform.localScale = Vector3(-0.1*x_t/pos.x,-0.1*x_t/pos.x,-0.1*x_t/pos.x);
		GameObject.Find("rImage"+i).transform.position = Vector3(x_t,y_t,z_t);
		GameObject.Find("rImage"+i).transform.rotation.x = GameObject.Find("Object").transform.rotation.x;
		GameObject.Find("lImage"+i).transform.localScale = Vector3(-0.1*x_t/pos.x,-0.1*x_t/pos.x,-0.1*x_t/pos.x);
		GameObject.Find("lImage"+i).transform.position = Vector3(x_t,y_t,z_tt);
		GameObject.Find("lImage"+i).transform.rotation.x = GameObject.Find("Object").transform.rotation.x;
	}
}
