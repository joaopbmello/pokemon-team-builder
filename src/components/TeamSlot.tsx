function TeamSlot() {
  return (
    <div className="w-52">
      <img
        className="absolute w-52"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      />
      <svg
        className="-mb-6 fill-grass"
        viewBox="2 2 19.9 9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.9 11c-.5-5.05-4.76-9-9.95-9C6.77 2 2.5 5.95 2 11h5.05a5 5 0 0 1 9.8 0h5.05z" />
      </svg>
      <svg
        className="fill-poison"
        viewBox="2 9 19.9 13"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          transform="scale(.18)"
          x="52.27"
          y="52.27"
          width="28.8"
          height="28.8"
          rx="14.4"
          stroke-width="0"
        />
        <path d="M21.9 13h-5.05a5 5 0 0 1-9.8 0H2c.5 5.05 4.77 9 9.95 9 5.19 0 9.45-3.95 9.95-9z" />
        <path
          d="M11.95 15c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm1.5-3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        />
      </svg>
    </div>
  );
}

export default TeamSlot;
