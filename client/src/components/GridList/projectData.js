import binarysearch from "../../assets/bookcase.png";
import binarysearchTwo from "../../assets/binarysearch.png";
import icebreaker from "../../assets/ice1.png";
import icebreakerTwo from "../../assets/icebreakerTwo.png";
import icebreakerThree from "../../assets/icebreakerThree.png";
import valhallaTwo from "../../assets/valhalla.png";
import valhallaThree from "../../assets/valhallaThree.png";
import gathering from "../../assets/urza.jpg";
import gatheringTwo from "../../assets/gatheringHome.png";
import gatheringThree from "../../assets/gatheringEdit.png";

export const projects = [
  {
    image: gathering,
    imageTwo: gatheringTwo,
    imageThree: gatheringThree,
    title: "The Gathering",
    description:
      "A full-stack app based on similar sites where users can browse a collection of Magic The Gathering articles. Leveraging React.js on the front end, as well as Ruby on Rails on the backend, this application allows authenticated users to create, edit and delete associated posts.",
    descriptionTwo:
      "One motivation for this project was simply to get practice using and understanding comoponent librarys, so this application was mainly styled using Material-UI.",
    gitHub: "https://github.com/Benjamin-Kuzava/TheGathering",
    liveSite: "https://modest-lovelace-ebf9fc.netlify.app/",
    cols: 2,
  },
  {
    image:
      "https://images.pexels.com/photos/188029/pexels-photo-188029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=",
    imageTwo: valhallaTwo,
    imageThree: valhallaThree,
    title: "Vahalla",
    description:
      "This fullstack MERN application allows users to browse a list of private islands for purchasing. General users have the ability to browse and select islands, while authenticated users can create, update, and delete their products from the inventory.",
    descriptionTwo:
      "This project was a group effort developed over the course of 7 days, with the primary focus on gaining experience with project management through tools such as GitHub and Kanban boards.",
    gitHub: "https://github.com/Benjamin-Kuzava/valhalla",
    liveSite: "https://musing-easley-0efe4b.netlify.app/",
    cols: 2,
  },
  {
    image: icebreaker,
    title: "IceBreaker",
    imageTwo: icebreakerTwo,
    imageThree: icebreakerThree,
    description:
      "Using React.js and airtable, this grid-based mini-game allows users to play, browse and create levels stored in an airtable database. The goal of the game is to travel from point A to point B on a grid, touching each non-obstacle tile on the grid exactly once. Once a tile has been traversed, it cracks, meaning that traveling back to that tile will end the game.",
    gitHub: "https://github.com/Benjamin-Kuzava/icebreaker",
    liveSite: "https://frosty-kowalevski-764330.netlify.app/",
    cols: 2,
  },
  {
    image: binarysearch,
    imageTwo: binarysearchTwo,
    title: "Binary Search Visualization",
    description:
      "Users can generate a random collection of books that are then arranged on a virtual bookshelf. Users can select a specific title to see how the binary search algorithm locates a specific book on the shelf. While the search runs, values tracked within the algorithm are highlighted, including the left and right bounds and current target.",
    descriptionTwo:
      "After the search finishes, a window pops up that displays additional information about the selected book.",
    gitHub: "https://github.com/Benjamin-Kuzava/binary-search-visualization",
    liveSite: "",
    cols: 2,
  },
];
