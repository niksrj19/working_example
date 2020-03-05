function deep_copy(input_obj) {
  if (
    input_obj !== null &&
    input_obj !== undefined &&
    typeof input_obj !== "object"
  ) {
    return input_obj;
  }

  let output_obj = input_obj instanceof Array ? [] : {};
  for (var key in input_obj) {
    output_obj[key] =
      input_obj[key] instanceof Object
        ? deep_copy(input_obj[key])
        : input_obj[key];
  }
  return output_obj;
}
