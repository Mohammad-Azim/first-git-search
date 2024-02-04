import { Avatar, Box, Link, Modal, Typography } from "@mui/material"

interface ForkedByProps {
    open: boolean;
    forkers: [];
    handleClose: () => void;
}

const ForkedBy:React.FC<ForkedByProps> = ({ open, forkers, handleClose })=> {
    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
            }}
            onClick={(event) => event.stopPropagation()}
        >
            <Typography id="forkers-modal-title" variant="h6" component="h2">
                Forked By
            </Typography>
            <Box id="forkers-modal-description" sx={{ mt: 2 }}>
                {forkers.map((forker: any) => (
                    <Box key={forker.owner.login} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Avatar src={forker.owner.avatar_url} alt={forker.owner.login} />
                        <Link href={forker.owner.html_url} target="_blank" rel="noopener">
                            {forker.owner.login}
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    </Modal>
    )
}
export default ForkedBy;