/** @format */
export default function DeleteUser({ id }) {
  const deleteHandler = async (id) => {
    await fetch(`http://localhost:5000/dashboard/users?id=${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error)
        } else {
          alert('Users deleted Succesfully')
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
