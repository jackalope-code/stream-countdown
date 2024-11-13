
# To-Do
* Break up marquee and consider incorporating more?

# Notes
* Add a twitch stream embed on countdown (I guess from some PUBLIC OAuth login credential flow... incredible embed moment there)
* Fix vertical centering in the available space remaining from the nav bar. Difficult bc the navbar is absolutely positioned... something about centering on remaining space while accounting for absolutely positioned elements so as to be truly centered. E.g: |    x    \/\/\/| with horizontal centering in remaining available space (i guess fit remaining space and offset it from the navbar... that's the only solution i've got).

# Bugs
* Marquee
  * Glitch on marquee wraparound. A background div with the same color as the marquee needs to be added.
  * Some other marquee glitches with links broken. Link interactivity would be nice.
  * Fixing pausing to work again properly on mouseover on the marquee would be nice
  * Having selection work for individual parts of the marquee would be nice (see breaking up the marquee in To-Do)