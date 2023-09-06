export const businessValidation = {
  label: "Business Name",
  type: "text",
  id: "businessName",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 40,
      message: "40 characters max",
    },
  },
};

export const addressValidation = {
  label: "Address",
  type: "address",
  id: "address",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const floorValidation = {
  label: "Floor / Unit #",
  type: "text",
  id: "floor-unit",
  validation: {
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const cityValidation = {
  label: "City",
  type: "text",
  id: "city",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const stateValidation = {
  label: "State",
  name: "state",
  id: "state",
  options: [
    "",
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ],
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const zipCodeValidation = {
  label: "Zip Code",
  type: "text",
  id: "zip-code",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 5,
      message: "5 characters max",
    },
  },
};

export const adminValidation = {
  label: "Administrator",
  type: "text",
  id: "admin",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const emailValidation = {
  label: "Email",
  type: "email",
  id: "email",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "not valid",
    },
  },
};

export const usernameValidation = {
  label: "Username",
  type: "text",
  id: "username",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const passwordValidation = {
  label: "Password",
  type: "password",
  id: "password",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
    pattern: {
      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g,
      message:
        "Password must contains: Minimum eight characters, at least one uppercase letter, one lowercase letter, one special character (#?!@$%^&*-)",
    },
  },
};
