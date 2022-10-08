import icon from '../../img/vert.png'
const vert ={
  cursor:'pointer'
}

export const Columns = [
  {
    Header: "ORGANIZATION",
    width: 140,
    overflow: "hidden",
    textOverflow: "ellipsis",
    accessor: "first_name",
  },

  {
    Header: "USERNAME",
    width: 120,
    overflow: "hidden",
    textOverflow: "ellipsis",
    accessor: "last_name",
  },

  {
    Header: "EMAIL",
    minWidth: 10,
    overflow: "hidden",
    textOverflow: "ellipsis",
    accessor: "email",
  },

  {
    Header: "PHONE NUMBER",
    accessor: "phone",
  },
  {
    Header: "DATE JOINNED",
    minWidth: 10,
    overflow: "hidden",
    textOverflow: "ellipsis",
    accessor: "date",
  },
  {
    Header: "STATUS",
    width: 100,
    accessor: "status",
    Cell: (props) => {
      var propss = props;
      return (
        <>
          <p
            style={{
              color:
                propss.value === "Blacklisted"
                  ? "#E4033B"
                  : propss.value === "Inactive"
                  ? "#545F7D"
                  : propss.value === "Active"
                  ? "#39CD62"
                  : propss.value === "Pending"
                  ? "#E9B200"
                  : "",
              backgroundColor:
                propss.value === "Inactive"
                  ? "#e7eaf3"
                  : propss.value === "Pending"
                  ? "#FDF7E5"
                  : propss.value === "Blacklisted"
                  ? "#FCE6EB"
                  : propss.value === "Active"
                  ? "#F3FCF6"
                  : "",
              padding:
                propss.value === "Inactive"
                  ? "5px 10px"
                  : propss.value === "Pending"
                  ? "5px 10px"
                  : propss.value === "Blacklisted"
                  ? "5px 10px"
                  : propss.value === "Active"
                  ? "5px 10px"
                  : "",
              width:
                propss.value === "Inactive"
                  ? "max-content"
                  : propss.value === "Pending"
                  ? "max-content"
                  : propss.value === "Active"
                  ? "max-content"
                  : propss.value === "Blacklisted"
                  ? "max-content"
                  : "",
              borderRadius:
                propss.value === "Inactive"
                  ? "10px"
                  : propss.value === "Pending"
                  ? "10px"
                  : propss.value === "Blacklisted"
                  ? "10px"
                  : propss.value === "Active"
                  ? "10px"
                  : "",
            }}
          >
            {props.value}
          </p>
        </>
      );
    },
  },

  {
    Header: "",
    width: 1,
    id: "icon",
    Cell: () => (<img style={vert} src={icon} alt='icon' />)
  },
];
