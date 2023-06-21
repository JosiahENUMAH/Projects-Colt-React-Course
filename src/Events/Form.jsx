export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("FORM SUBMITTED");
  };
  return (
    <form onSubmit={handleSubmit}>
      <button>Submit</button>
    </form>
  );
}
