import { SFormContainer, SFrom, SMain } from '@/styles/Review';

export default function ReviewPage() {
  return (
    <SMain>
      <h1>Review for Today</h1>
      <SFormContainer>
        <SFrom>
          <div className='highlight_container'>
            <h3>Today&apos;s highlight</h3>
            <input
              type='text'
              placeholder='stduying new programming language Dart'
            />
          </div>
          <div>
            <h3>Did I make time for it?</h3>
            <div>
              <button type='button'>Yes</button>
              <span> / </span>
              <button type='button'>No</button>
            </div>
          </div>
          <div>
            <h3>LASER</h3>
            <div>
              <label>TODAY&apos;S FOCUS</label>
              <input type={'range'} />
            </div>
          </div>
          <div>
            <h3>ENERGIZE</h3>
            <div>
              <label>TODAY&apos;S ENERGY</label>
              <input type={'range'} />
            </div>
          </div>
          <div>
            <div>
              <h3>TACTICS TRIED TODAY:</h3>
              <textarea />
            </div>
            <div>
              <h3>HOW DID IT GO?</h3>
              <textarea />
            </div>
          </div>
          <div>
            <h3>TACTICS TO TRY (OR TRY AGAIN) TOMORROW:</h3>
            <textarea />
          </div>
        </SFrom>
      </SFormContainer>
    </SMain>
  );
}
