/** @format */
export default function DeleteService({ id }) {
  const deleteHandler = async (id) => {
    await fetch(`http://localhost:3001/dashboard?id=${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        service: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error)
        } else {
          alert('Service Deleted Succesfully')
          window.location.reload()
        }
      })
  }
  return (
    <button
      className="w-[80px] h-[36px] bg-newRed px-4 ml-4 mx-2 rounded-xl font-Inter font-semibold text-[12px] text-black"
      onClick={() => deleteHandler(id)}>
      Delete
    </button>
  )
}
