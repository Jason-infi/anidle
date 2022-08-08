import toast from "react-hot-toast";
// import { BeakerIcon } from "@heroicons/react/solid";

const howToPlayToast = () => {
  toast.custom(
    (t) => (
      <div
        className={`max-w-md w-full bg-white shadow-2xl rounded-lg pointer-events-auto p-2 dark:bg-black dark:text-white dark:border-solid dark:border-gray-800 dark:border transition-all ease-in ${
          t.visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <header className='flex justify-between'>
          <p className='rowpara font-semibold text-lg'>HOW TO PLAY</p>
          <button onClick={() => toast.dismiss(t.id)} className=''>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </header>
        <section>
          <div className='dark:border-y-[#3a3a3c] border-y border-solid'>
            <p className='rowpara'>
              Guess the <strong>WORDLE</strong> in 6 tries.
            </p>
            <p className='rowpara'>
              Each guess must be a valid 5-letter word. Hit the enter button to
              submit.
            </p>
            <p className='rowpara'>
              After each guess, the color of the tiles will change to show how
              close your guess was to the word.
            </p>
          </div>
          <div className='p-1'>
            <p className='rowpara'>
              <strong>Examples</strong>
            </p>
            <div className='p-1'>
              <div className='rowtoast'>C</div>
              <div className='rowtoast'>H</div>
              <div className='rowtoast'>I</div>
              <div className='rowtoast text-white bg-[#FF4D6D] border-[#FF4D6D] dark:border-[#FF4D6D]'>
                K
              </div>
              <div className='rowtoast'>A</div>
              <p className='rowpara'>
                The letter <strong>K</strong> is in the word and in the correct
                spot.
              </p>
            </div>
            <div className='p-1'>
              <div className='rowtoast text-white bg-[#7BDFF2] border-[#7BDFF2] dark:border-[#7BDFF2] '>
                I
              </div>
              <div className='rowtoast'>T</div>
              <div className='rowtoast'>S</div>
              <div className='rowtoast'>U</div>
              <div className='rowtoast'>K</div>
              <div className='rowtoast'>I</div>
              <p className='rowpara'>
                The letter <strong>I</strong> is in the word but in the wrong
                spot.
              </p>
            </div>
            <div className='p-1'>
              <div className='rowtoast'>O</div>
              <div className='rowtoast'>B</div>
              <div className='rowtoast text-white dark:bg-[#3a3a3c] bg-[#787c7e] border-[#787c7e] dark:border-[#3a3a3c]'>
                I
              </div>
              <div className='rowtoast'>T</div>
              <div className='rowtoast'>O</div>
              <p className='rowpara'>
                The letter <strong>I</strong> is not in the word in any spot.
              </p>
            </div>
          </div>
        </section>
      </div>
    ),
    {
      duration: 15000,
    }
  );
};

export default howToPlayToast;
