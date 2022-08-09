import toast from "react-hot-toast";

const linkTree = () => {
  toast.custom(
    (t) => (
      <div
        className={`max-w-md w-full bg-white shadow-2xl rounded-lg pointer-events-auto p-2 dark:bg-black dark:text-white dark:border-solid dark:border-gray-800 dark:border transition-all ease-in ${
          t.visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <header className='flex justify-between'>
          <p className='rowpara font-semibold text-lg'>Contact Me Here :</p>
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
        <div className='dark:border-t-[#3a3a3c] border-t border-solid flex flex-col'>
          <button className='rowpara'>
            <a
              href='https://www.linkedin.com/in/abhishek-meena-886998157'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </button>
          <button className='rowpara'>
            <a href='mailto:abhishekmeena7000@gmail.com'>Email :</a>
          </button>
          <p className='rowpara text-center'>abhishekmeena7000@gmail.com</p>
        </div>
      </div>
    ),
    {
      duration: 15000,
    }
  );
};

export default linkTree;
