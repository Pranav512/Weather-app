const CurrentDateTime = () => {
  const currentDate = new Date();
  var dateTime = currentDate.toUTCString();
  return (
    <div>
      <span className="datetime">{dateTime}</span>
    </div>
  )
}

export default CurrentDateTime;