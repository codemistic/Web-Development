This is a motion detector using basic concepts of computer vision.
The main concept used here is we take 2 frames from the video and
then we subtract them from each other. After subtraction we will 
only get the the part which has moved a bit. Then we first select
that part and do some optimisations over that. And then finally we 
go and make a rectangle around it.

To run this code you will need to install the required files listed
in the Requirements.txt.