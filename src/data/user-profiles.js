const userProfile = [
    {key:1, name: "Manav", avatarUrl: "https://i.pinimg.com/originals/eb/05/eb/eb05eb6fb0880b5c811669b60b0278bb.png"},
    {key:2, name: "Mac", avatarUrl: "https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"},  
    {key:3, name: "Virat", avatarUrl: "https://i.pinimg.com/originals/aa/64/a1/aa64a1ee094b8f798053b51800c622fb.png"},
    {key:4, name: "MBB", avatarUrl: "https://i.pinimg.com/474x/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.jpg"},
    {key:5, name: "Lisa", avatarUrl: "https://i.pinimg.com/originals/33/e4/07/33e407bc4b74d5d7d56eb4dc78c29164.png"},
];

export const SaveProfile = (id, newProfile) => {
    let user = userProfile.find(id);
    console.log("New Profile: ", newProfile);
    console.log(user);
}

export default userProfile;