function ContactUs() {
  return (
    <div
      className="py-8 px-14 mx-24 my-10
    border border-stone-200 shadow-lg"
    >
      <h1 className="font-bold text-3xl mb-4 ">Contact Us</h1>
      <form className="flex flex-col gap-8">
        <div className="flex justify-between">
          <label>Name: </label>
          <input
            placeholder="name"
            className="border border-stone-400 w-[80%] "
            type="text"
          />
        </div>
        <div className="flex justify-between">
          <label>Message: </label>
          <input className="border border-stone-400 w-[80%] " type="text" />
        </div>
        <button
          className="border font-bold py-1 border-stone-400 bg-stone-200 
          hover:bg-stone-400 "
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
