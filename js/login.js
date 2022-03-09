const loginModal = document.querySelector('.login-modal--js');

const hideLoginModal = () => {
    if(loginModal && loginModal.classList.contains('modal--active')) loginModal.classList.remove('modal--active');
}

const toggleModal = () => {
    const loginRegExp = new RegExp('/#login'); 
    if(loginRegExp.test(window.location.href) && !loginModal.classList.contains('modal--active')) {
        loginModal.classList.add('modal--active');
    } else {
        loginModal.classList.remove('modal--active');
    }
};

toggleModal();

window.addEventListener("hashchange", toggleModal, false);