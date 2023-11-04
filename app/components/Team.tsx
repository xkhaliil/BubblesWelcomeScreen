const Team = () => {
  const team = [
    {
      avatar:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/309421542_1431901407302150_1980397272950775424_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ISWbJqowms4AX8LPVjq&_nc_oc=AQkpeWwDazyoCr0lVbAF4J8SuhbdymxYidxO-BxBdOXjK07bUBbALDlgl5poxoLsI_A&_nc_ht=scontent.ftun8-1.fna&oh=00_AfAUFYo0KcfnIsdwJIX4P0ZJiEih9po3065zwOOv6zc3rA&oe=654B5FAF",
      name: "Maher Mansour",
      title: "CEO & Founder",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/99325011?v=4",
      name: "Ahmed Mayara",
      title: "Software engineer",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar:
        "https://avatars.githubusercontent.com/u/92889256?s=400&u=9eb7c91f76ee735a7023160252c600f3f94870c0&v=4",
      name: "Khalil ltaief",
      title: "Full stack engineer",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/378394963_1384130895508195_6190041893450504943_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bzIvurCbLuIAX8O71l_&_nc_ht=scontent.ftun8-1.fna&oh=00_AfAEnAptGZHdTEMXwdkHQkAKUQc2M1C8CBzEtnhkA-tOQQ&oe=654A17ED",
      name: "Fatma Hattab ",
      title: "Head of designers",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar:
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t1.6435-9/165618312_1126614194456660_847961281452832527_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_ohc=07MVgt7zwYcAX9iHOuz&_nc_ht=scontent.ftun8-1.fna&oh=00_AfBi-bc-PY_4EO3SvZKINW_31wW2e3xjZzMaNnrrbTo1LA&oe=656CE0CD",
      name: "Asma Ràies",
      title: "Head of marketing",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meet our team
          </h3>
          <p className="text-gray-600 mt-3">
            "Meet our exceptional team of passionate individuals dedicated to
            bringing you the best experience with Bubbles. We are a diverse
            group of experts in technology, design, and matchmaking, all working
            together to make your dating journey as enjoyable and successful as
            possible. Together, we're here to help you find the connections that
            matter most."
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((item, idx) => (
              <li key={idx} className="flex gap-4 items-center">
                <div className="flex-none w-24 h-24">
                  <img
                    src={item.avatar}
                    className="w-full h-full rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-gray-700 font-semibold sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                  <div className="mt-3 flex gap-4 text-gray-400">
                    <a href={item.twitter}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <g clip-path="url(#clip0_17_80)">
                          <path
                            fill="currentColor"
                            d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_80">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href={item.linkedin}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <g clip-path="url(#clip0_17_68)">
                          <path
                            fill="currentColor"
                            d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_68">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Team;
