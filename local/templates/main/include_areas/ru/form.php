<div class="c-form">
  <form class="c-form__form validate" id="callback" action="">
    <div class="c-form__line">
      <div class="c-form__input c-form__input--half">
        <input class="c-form__input-field" type="text" name="name" id="orderName">
        <label class="c-form__input-label" for="orderName"><span class="c-form__input-label-content">Как Вас зовут, друг?</span></label>
      </div>
      <div class="c-form__input c-form__input--half">
        <input class="c-form__input-field mask--phone" type="text" name="phone" id="orderPhone">
        <label class="c-form__input-label" for="orderPhone"><span class="c-form__input-label-content">Ваш телефон:</span></label>
      </div>
    </div>
    <div class="c-form__line">
      <div class="c-form__input c-form__input--half">
        <input class="c-form__input-field" type="text" name="email" id="orderMail">
        <label class="c-form__input-label" for="orderMail"><span class="c-form__input-label-content">E-mail:</span></label>
      </div>
      <div class="c-form__input c-form__input--half">
        <div class="c-form__input-field c-form__input-file">
          <div class="dZUpload dz-clickable" id="dZUpload">
            <div class="dz-default dz-message"><span>Выберите файл</span>
              <div class="dz-icon"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.856237 8.7963C0.38055 8.7963 9.53674e-07 9.16667 9.53674e-07 9.62963V14.1667C9.53674e-07 14.6296 0.38055 15 0.856237 15H14.1121C14.5877 15 15 14.6296 15 14.1667V9.62963C15 9.16667 14.5877 8.7963 14.1121 8.7963C13.6364 8.7963 13.2558 9.16667 13.2558 9.62963V13.3025H1.71247V9.62963C1.71247 9.16667 1.33192 8.7963 0.856237 8.7963Z" fill="#0000FF"/>
                  <path d="M8.08667 10.679L11.575 7.28395C11.9239 6.94444 11.9239 6.45062 11.575 6.11111C11.2262 5.77161 10.7188 5.77161 10.37 6.11111L8.34037 8.05556V0.833333C8.34037 0.37037 7.95982 0 7.48413 0C7.00845 0 6.6279 0.37037 6.6279 0.833333V8.05556L4.63001 6.11111C4.28117 5.77161 3.74206 5.77161 3.39322 6.11111C3.04439 6.45062 3.04439 6.94444 3.39322 7.28395L6.8816 10.679C7.04016 10.8333 7.26215 10.9259 7.48413 10.9259C7.70612 10.9259 7.92811 10.8333 8.08667 10.679Z" fill="#0000FF"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <!--input(type="text" placeholder='Прикрепить файл:' name='fileupload').c-form__input-field.c-form__input-field--half-->
      </div>
    </div>
    <div class="c-form__line">
      <div class="c-form__input">
        <input class="c-form__input-field" type="text" name="message" id="orderMessage">
        <label class="c-form__input-label" for="orderMessage"><span class="c-form__input-label-content">Опишите свой вопрос</span></label>
      </div>
    </div>
    <div class="c-form__error"></div>
    <div class="c-form__bottom c-form__line">
      <!--div.c-form__bottom-half
      input(type="checkbox" id='check_2' name='check_2' checked).c-form__checkbox.validate__CHECKBOX
      label(for="check_2").c-form__checkbox-label Согласен на обработку персональных данных
      -->
      <input class="btn btn--arrow c-form__link" type="submit" role="button" value="Отправить"><span class="arrow_icon"><svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12L6 6.92187L1 1.84375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></input>
    </div>
    <input type="hidden" name="uploaded_files" value="">
    <input type="hidden" name="action" value="feedback">
    <?= bitrix_sessid_post() ?>
  </form>
</div>