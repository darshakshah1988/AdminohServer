export const state = {
    authed: false,
    dashboardLoading: true,
    // subscriptionStatus: null,
    socket: null,
    student: {
        courses: [],
        theme: 'grow',
    },
    selectAllStudents: false,
    selectedStudents: [],
    courses: [],
    businesses: [],
    studentListFilter: 'business',
    admin: {
        name: '',
        email: '',
        logo_url: '',
        theme: 'grow',
        userType: ''
    },
    sidebarOpen: false,
    notification: {
        type: '',
        title: '',
        text: '',
    },
    activeStudentProfile: {},
    activeBusinessProfile: {
        students: []
    },
    activeStudentCard: {},
    user: {},
    breadcrumbs: [],
    modals: {
        addUnit: false,
        addStudent: false,
        addCourse: false,
        addBusiness: false,
        addBusinessCourse: false,
        card: false,
        editProfile: false,
        addStudentCourse: false,
        addStudentBusiness: false,
        removeStudentCourse: false,
        removeStudentBusiness: false,
        removeCourse: false,
        removeStudent: false,
        removeBusiness: false,
        removeBusinessCourse: false,
        removeUnit: false,
        removeCard: false,
        removeVideo: false,
        removeAudio: false,
        cardType: false,
        addSponsor: false,
        meetingCard: false,
        addMentor: false
    },
    removeCourseId: null,
    removeUnitId: null,
    removeCardId: null,
    addCardUnitId: null,
    subscription: null,
    subscription_plans: [],
    storageUsage: null,
    sponsors: []
}
