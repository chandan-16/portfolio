const Contact = () => {
  return (
    <>
      <div className="text-center pb-10 z-20 mb-10 px-4 mt-20 pt-10">
        <h2 className="text-4xl sm:text-5xl font-[900] tracking-widest pt-10 pb-5">Contact</h2>
        <hr className="h-2 w-7 rounded bg-violet-600 border-none mb-5 mx-auto" />
        <p className="text-[#555555] text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      </div>

      <div className="bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-no-repeat bg-center bg-contain w-full py-20 px-4">
        <form className="max-w-3xl mx-auto bg-white bg-opacity-80 p-6 sm:p-10 rounded-lg shadow-md backdrop-blur-md">

          <div className="mb-6">
            <label htmlFor="Name" className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
            <input type="text" placeholder="Enter Your Name" maxLength="55" className="w-full border border-gray-300 p-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>

          <div className="mb-6">
            <label htmlFor="Email" className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
            <input type="email" placeholder="Enter Your Email" className="w-full border border-gray-300 p-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>

          <div className="mb-6">
            <label htmlFor="Message" className="block text-lg font-semibold text-gray-700 mb-2">Message</label>
            <textarea name="message" id="message" rows="5" placeholder="Enter Message" className="w-full border border-gray-300 p-3 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="mt-4 bg-[#7843E9] py-3 px-8 font-bold rounded text-white tracking-wider text-base sm:text-lg md:text-xl hover:bg-violet-700 transition-colors">Submit</button>
          </div>
        </form>
      </div>    
    </>
  )
}

export default Contact