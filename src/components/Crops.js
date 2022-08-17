import { Grid } from "@material-ui/core";
import CropsUI from "./CropsUI";
import { Box } from "@material-ui/core";
const cropFields = [
  {
    title:"GROUNDNUT",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgYWbtRO9dmxY5OtLxzJNCXsM5SP_BvQweg&usqp=CAU",
    description: "peanut, (Arachis hypogaea), also called groundnut, earthnut, or goober, legume of the pea family (Fabaceae), grown for its edible seeds.",
  },
  {
    title:"LADIES FINGER",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaaz9JWdkvWRqT-edCAUkfjFzM9JNxEPlvDA&usqp=CAU",
    description: "Okra or ladies finger, bhindi is a type of green vegetable, long finger like, having a small tip at the tapering end used extensively in Indian vegetables, ",
  },
  {
    title:"PADDY",
    image: "https://thumbs.dreamstime.com/b/paddy-field-11870763.jpg",
    description: "paddy, also called rice paddy, small, level, flooded field used to cultivate rice in southern and eastern Asia.  where it utilizes a small fraction of the total land.",
  },
  
];

function Crops() {
  return (
    <Box style={{marginTop:100}}>
      <Grid container spacing={6}>
       
          {cropFields.map((crop, i) => {
            return <Grid item><CropsUI key={i} {...crop} /></Grid>;
          })}
       
      </Grid>
    </Box>
  );
}

export default Crops;
