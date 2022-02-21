interface UtilsInterface {
   createIndexById: (id: number) => string;
};

const Utils: UtilsInterface = {
   createIndexById: (id: number) => {
      const idAsString = String(id);

      if (idAsString.length === 1) {
         return `00${id}`;
      } else if (idAsString.length === 2) {
         return `0${id}`;
      } else {
         return idAsString;
      }
   }
}


export default Utils;