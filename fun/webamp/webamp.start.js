const Webamp = window.Webamp;
	const webamp = new Webamp({
		__butterchurnOptions: {
			importButterchurn: () => Promise.resolve(window.butterchurn),
			getPresets: () => {
				const presets = window.butterchurnPresets.getPresets();
				return Object.keys(presets).map((name) => {
					return {
						name,
						butterchurnPresetObject: presets[name],
					};
				});
			},
			butterchurnOpen: true,
		},
		initialTracks: [
	        {
				url: "https://file.garden/aWqglscXH3YX9a2r/Kanye%20West%20-%20Bound%202%20(Album%20Version%20(Explicit))%20(4).flac",
				defaultName: "Kanye West - Bound 2",
			},
			{
				url: "https://file.garden/aWqglscXH3YX9a2r/Lil%20Uzi%20Vert%20-%20Days%20Come%20and%20Go.flac",
				defaultName: "Lil Uzi Vert - Days Come and Go",
			},
		    {   url: "https://file.garden/aWqglscXH3YX9a2r/Lil%20Yachty%20-%20drive%20ME%20crazy!.flac",
		        defaultName: "Lil Yachty - drive ME crazy!",
	        },
		],
		windowLayout: {
			main: { position: { top: 0, left: 0 } },
			equalizer: { position: { top: 116, left: 0 } },
			playlist: {
				position: { top: 232, left: 0 },
				size: { extraWidth: 0, extraHeight: 4 },
			},
			milkdrop: {
				position: { top: 0, left: 275 },
				size: { extraHeight: 12, extraWidth: 7 },
			},
		},
	});

	webamp.renderWhenReady(document.getElementById("app"));
