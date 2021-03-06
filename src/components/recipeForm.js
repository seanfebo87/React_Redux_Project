import React from "react";

const RecipeForm = ({ type, name, placeholder, value, onChange }) => {
  return (
   <form>
      <input
        class="input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default RecipeForm;
