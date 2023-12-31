export const wServerRoot = "http://localhost:8000";

export const wServer = {
    LOGIN : `${wServerRoot}/api/auth/login/`,
    GET : {
        PLATEAU_TECHNIQUE : ``,
        DOCTOR_PROFILE : `${wServerRoot}/api/grh/medecins/`,
    },
    CREATE : {
        USER : `${wServerRoot}/api/auth/login/`,
        PERSONNEL : ``,
    },
    UPDATE : {
        USER : `${wServerRoot}/api/auth/login/`
    }
};

export const wapp = {
    DASHBOARD : "/dashboard",
    DOCTOR : {
        ALL : "/doctors",
        ADD : "/addDoctor",
        PROFILE : "/doctor/?id="
    },
    PATIENT : {
        ALL : "/patients",
        ADD : "/addPatient",
        PROFILE : "/patient/?id="
    },
    GRH : {
        ALL : "/grh",
        ADD : "/addDoctor",
        PROFILE : "/doctor/?id="
    },
    PHARMACY : {
        ALL : "/doctors",
        ADD : "/addDoctor",
        PROFILE : "/doctor/?id="
    }
};