// object template.

const name = class {
  constructor(
    name,
    UID,
    section,
    value // class properties. // Class parameters.
  ) {
    (this.name = name),
      (this.UID = UID),
      (this.section = section),
      (this.value = value),
      (this.never = true);
  }
  setName(NameValue) {
    this.name = NameValue;
  }
  setUID(UidValue) {
    this.name = UidValue;
  }
  setSection(SectionValue) {
    this.name = SectionValue;
  }
  setvalue(ValueNO) {
    this.name = ValueNO;
  }
  setNever(neverValue) {
    this.never = neverValue;
  }
};
export default name;
