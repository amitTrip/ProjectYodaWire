function RootDumpAnalyzerObject(InitalLenght, InitalHeight) {
    this.InitalLenght = InitalLenght;
    this.InitalHeight = InitalHeight;
    this.listOfGroupElements = [];
    this.ListOfPathElements = [];

}

function GroupElement(GroupId, GroupClass, DepthLevel) {
    this.GroupId = GroupId;
    this.GroupClass = GroupClass;
    this.DepthLevel = DepthLevel;
    this.ElementsInGroupList = [];
}

function Element(ElementId, ChildCount, DepthLevel) {
    this.ElementId = ElementId;
    this.ChildCount = ChildCount;
    this.DepthLevel = DepthLevel;
    this.ConnectorList= [];
} 

// Area for visual objects generation. 
// Region for Dragabble :Start
var selectedElement = 0;
var currentX = 0;
var currentY = 0;
var currentMatrix = 0;
function deselectElement(evt) {
    if (selectedElement != 0) {
        selectedElement.removeAttributeNS(null, "onmousemove");
        selectedElement.removeAttributeNS(null, "style");
        selectedElement = 0;
        console.log("deselet Fiewhitesmoke " + selectedElement);
    }

}
function startMove(evt, moveType) {
    x1 = evt.clientX;
    y1 = evt.clientY;
    selectedElement = evt.target;
    selectedElement.setAttributeNS(null, "onmousemove", "moveIt(evt)");

    if (moveType == 'single') {
        C = evt.target;
    }
    else {
        C = evt.target.parentNode;
    }
}
function moveIt(evt) {
    translation = C.getAttributeNS(null, "transform").slice(10, -1).split(' ');
    sx = parseInt(translation[0]);
    sy = parseInt(translation[1]);

    if (isNaN(sx)) {
        sx = 0;
    }
    C.setAttributeNS(null, "transform", "translate(" + (sx + evt.clientX - x1) + " " + (sy + evt.clientY - y1) + ")");
    x1 = evt.clientX;
    y1 = evt.clientY;

}
// Region for Dragabble : End


// <g class="draggable" transform="matrix(1 0 0 1 0 0)" DepthLevel="0" onmousedown="startMove(evt,'group')" onmouseup="deselectElement(evt)">
//This function will generate a group element
function GroupElementGenerator(svgElementId, lenght, height, grouplevel, styleClass, Isdraggable)
{
    var Element = document.getElementById(svgElementId);
    var groupNode = document.createElementNS(svgNS, "g");
    groupNode.setAttributeNS(null, "Id", "GroupLevelElement-"+ grouplevel);
    groupNode.setAttributeNS(null, "DepthLevel", grouplevel);
    groupNode.setAttributeNS(null, "class", styleClass);
    groupNode.setAttributeNS(null, "transform", "matrix(1 0 0 1 0 0)");
    groupNode.setAttributeNS(null, "onmousedown", "selectElement(evt)");
    groupNode.setAttributeNS(null, "onmouseup", "deselectElement(evt)");
    // Add Dragging Feature to group elements 
    return groupNode; 
    //TODO:
    //call increment svg box and then add this to client of this funtion. 
    //incremenetSvgBox(x, y);
    //document.getElementById("dumpAnalyzer").appendChild(rectS);
}

//This will generate an element -- the height will be set by client else its will be : globally 400 px or 200 px 
function Element(svgElementId, x, y, width, height, grouplevel, styleClass, childCount) {
    var rectS = document.createElementNS(svgNS, "rect");       
    rectS.setAttributeNS(null, "x", x);
    rectS.setAttributeNS(null, "y", y);   
    rectS.setAttributeNS(null, "rx", 10);
    rectS.setAttributeNS(null, "ry", 10);
    rectS.setAttributeNS(null, "id", "Level" + level);
    rectS.setAttributeNS(null, "fill", "rgb(210, 232, 255)");
    rectS.setAttributeNS(null, "stroke", "whitesmoke");
    rectS.setAttributeNS(null, "class", styleClass);
    rectS.setAttributeNS(null, "width", width);
    rectS.setAttributeNS(null, "height", height);
    rectS.setAttributeNS(null, "Child", child);
    rectS.addEventListener("dblclick", eventHandler, false);
    rectS.setAttributeNS(null, "class", "draggable");
    rectS.setAttributeNS(null, "transform", "matrix(1 0 0 1 0 0)");

    // ToDo : Add header and heading text (inside this function or another function. )
    // Add the circles for path if this has a child. which will be located on right. (think for some corellation )
    // Add a foriegn elements as well call function AddforiegnElement if this list is more than 10 elements then 
    // show the data in the seperate error console window, we can control the html elements as well. 


    return rectS;
}

//This will be needed to generate a HTML table or div to display any data. 
function AddforiegnElement()
{

}

//This will createPath by reading the parent and child relation ships and joining the paths. 
function GeneratePath()
{



}

//This will Remove and elements and its child objects from the view
function RemoveElement() {



}
//This function will mainatin parent and child elements relationship. Once parent is deleted all its child 
//will be deleted from the screen. This needs to be implemented inside a dictionary of objetcs. (more thinking..!! )
function storeParentChildRelation()
{

}


function DrawAnalysisResult()
{
    //Get Data object from backend which will contain below information. 
    //DumpInformation 
    //ProcessInformation-PEB
    //Handlescollection
    //ModuleCollection
    //Threadlist
    //Dictionary threadId with Stacktrace


    var RootDumpAnalyzerObject = new RootDumpAnalyzerObject(10, 100);
   
    for (level = 0 ; level < 5; level++)
    {
        var GroupElement = new GroupElement(level, "draggable", level);
        //Read the data and create the elements.

        //Elements in a group -- 
        //This consists of Main Rectangle, Header Rectangle, foriegnObject(Table), Left Connector, Right Connector (if this has child)

        for (i = 0; i < 10 ;i++)
        {

        }

        GroupElement.ElementsInGroupList.push();
        

        RootDumpAnalyzerObject.listOfGroupElements.push(GroupElement);

    }
   

}