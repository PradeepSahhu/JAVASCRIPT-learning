// Creaing a class / object template

const room = class {
  // class initialization using class expression.
  constructor( // class parameters.
    name,
    Batch,
    UID,
    complexion,
    weight,
    gender,
    height,
    roomNo,
    hostel,
    block,
    type,
    haveGf
  ) {
    // on the left side is the properties name, it could be different than the parameters name.
    // on the right side is the parameters name which is equal to the properties of the class.

    // class properties...
    (this.name = name),
      (this.Batch = Batch),
      (this.UID = UID),
      (this.block = block),
      (this.complexion = complexion),
      (this.weight = weight),
      (this.height = height),
      (this.gender = gender),
      (this.roomNo = roomNo),
      (this.hostel = hostel),
      (this.type = type),
      (this.haveGf = haveGf),
      (this.never = false);
  }
  setName(valueName) {
    // a normal class method. (normal js function)
    this.name = valueName;
  }
  setBatch(valueBatch) {
    this.Batch = valueBatch;
  }
  setUID(setUID) {
    this.UID = setUID;
  }
  setblock(blockValue) {
    this.block = blockValue;
  }
  setComplexion(complexionValue) {
    this.complexion = complexionValue;
  }
  setWeight(weightValue) {
    this.weight = weightValue;
  }
  setHeight(HeightValue) {
    this.heigh = HeightValue;
  }
  setGender(GenderValue) {
    this.gender = GenderValue;
  }
  setRoom(RoomNO) {
    this.room = RoomNO;
  }
  setHostel(HostelName) {
    this.hostel = HostelName;
  }
  setType(typeValue) {
    this.tyep = typeValue;
  }
  setHaveGf(GF) {
    this.hveGf = GF;
  }
  setNever(neverValue) {
    this.never = neverValue;
  }
};
export default room;
