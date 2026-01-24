document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');

    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const current = e.currentTarget;
            const targetId = current.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id="${targetId}"]`);
            if (!tab) return;

            hideAllTabs();
            tab.classList.add('shows__list--is-active');

            removeActiveButton();
            current.classList.add('shows__tabs__button--is-active');
        });
    });

    function removeActiveButton() {
        document
            .querySelectorAll('[data-tab-button]')
            .forEach((b) => b.classList.remove('shows__tabs__button--is-active'));
    }

    function hideAllTabs() {
        document
            .querySelectorAll('[data-tab-id]')
            .forEach((t) => t.classList.remove('shows__list--is-active'));
    }
});