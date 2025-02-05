(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/pwff-cohort-1",headers:{authorization:"4dcca27c-ad6b-4c7a-8946-3b53d9b05383","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():e.json().then((function(t){return Promise.reject("Ошибка ".concat(e.status,": ").concat(t.message||t))}))},n=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)},o=document.querySelector("#card-template").content;function c(e,t,n,r,c){var a=o.querySelector(".places__item").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=a.querySelector(".card__like-button-count"),p=e._id;return u.src=e.link,i.textContent=e.name,u.alt="Изображение ".concat(e.name),d.textContent=e.likes.length,u.addEventListener("click",(function(){r(e)})),e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active"),t!==e.owner._id?l.remove():l.addEventListener("click",(function(){"function"==typeof c?c(a,p):console.error("cardDelete is not defined or not a function")})),s.addEventListener("click",(function(e){n(e,p,d)})),a}function a(e,t,o){var c=e.target;(c.classList.contains("card__like-button_is-active")?r:n)(t).then((function(e){c.classList.toggle("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){return console.log(e)}))}var u=function(e){e.classList.add("popup_is-opened"),e.classList.add("popup_is-animated"),document.addEventListener("keydown",l),e.addEventListener("click",s)},i=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",l),e.removeEventListener("click",s)},l=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");i(t)}},s=function(e){e.target===e.currentTarget&&i(e.currentTarget)},d={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input-invalid",errorClass:"popup__input-error_active"},p=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},f=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){p(e,n,t)})),r.disabled=!0,r.classList.add(t.inactiveButtonClass)},m=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var y,v=document.querySelector(".places__list"),h=document.querySelector(".profile__edit-button"),b=document.querySelector(".profile__add-button"),S=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_new-card"),L=document.querySelector(".popup_type_image"),g=document.querySelector(".popup__image"),E=document.querySelector(".popup__caption"),k=document.querySelectorAll(".popup__close"),C=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),x=document.querySelector(".profile__image"),U=document.forms["new-place"],T=U.querySelector(".popup__button"),w=document.forms["edit-profile"],B=w.querySelector(".popup__button"),j=document.querySelector(".popup__input_type_name"),D=document.querySelector(".popup__input_type_description"),O=document.querySelector(".popup__input_type_card-name"),P=document.querySelector(".popup__input_type_url"),I=document.querySelector(".popup_type_change-avatar"),M=document.querySelector(".profile__image"),N=I.querySelector(".popup__form"),J=N.querySelector(".popup__input_type_url"),H=N.querySelector(".popup__button"),V=document.querySelector(".popup_type_remove-card"),z=V.querySelector(".popup__button");function $(e){e.disabled=!0,e.classList.add(d.inactiveButtonClass)}function F(e){e.disabled=!1,e.classList.remove(d.inactiveButtonClass)}function G(e,t){e.textContent=t}function K(n,r){u(V),z.onclick=function(){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)})(r).then((function(){n.remove(),i(V)})).catch((function(e){return console.error("Ошибка при удалении карточки:",e)}))}}function Q(e){g.src=e.link,g.alt=e.name,E.textContent=e.name,u(L)}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);m(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){(function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?p(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)})(e,o,t),m(n,r,t)}))}))}(t,e)}))}(d),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],u=r[1];C.textContent=o.name,A.textContent=o.about,x.style.backgroundImage="url(".concat(o.avatar,")"),y=o._id,u.forEach((function(e){var t=c(e,y,a,Q,K);v.append(t)}))})).catch((function(e){return console.error("Ошибка при загрузке данных:",e)})),M.addEventListener("click",(function(){u(I),J.value="",f(I,d)})),N.addEventListener("submit",(function(n){var r;n.preventDefault(),$(H),G(H,"Сохранение..."),(r=J.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r.trim()})}).then(t)).then((function(e){M.style.backgroundImage="url(".concat(e.avatar,")"),i(I)})).catch((function(e){console.error("Ошибка при обновлении аватара:",e),F(H)})).finally((function(){G(H,"Сохранить")}))})),h.addEventListener("click",(function(){u(S),f(S,d),j.value=C.textContent,D.value=A.textContent})),w.addEventListener("submit",(function(n){var r,o;n.preventDefault(),$(B),G(B,"Сохранение..."),(r=j.value,o=D.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then(t)).then((function(e){C.textContent=e.name,A.textContent=e.about,i(S)})).catch((function(e){console.error("Ошибка при обновлении профиля:",e),F(B)})).finally((function(){G(B,"Сохранить")}))})),b.addEventListener("click",(function(){u(q),f(q,d)})),U.addEventListener("submit",(function(n){var r;n.preventDefault(),$(T),G(T,"Сохранение..."),(r={name:O.value.trim(),link:P.value.trim()},fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r.name.trim(),link:r.link.trim()})}).then(t)).then((function(e){var t=c(e,y,a,Q,K);v.prepend(t),i(q),n.target.reset()})).catch((function(e){console.error("Ошибка при добавлении карточки:",e),F(T)})).finally((function(){G(T,"Создать")}))})),k.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return i(t)}))}))})();