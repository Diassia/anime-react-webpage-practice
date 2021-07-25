const ReactiveImage = (props) => {
    // console.log(`This image displayed is from ${props.vnData.title}`);
    
    return (
        <img src={props.vnData.urlImage} alt="cat"/>
    );
}
 
export default ReactiveImage;