import { useState } from "react";
import { Calendar, formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const CalendarSchedule = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvent, setCurrentEvent] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (selected) => {
    setSelectedDate(selected);
    setOpenDialog(true);
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete event ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewEventTitle("");
  };

  const handleAddEvent = () => {
    const calendarAPI = selectedDate.view.calendar;
    calendarAPI.unselect();

    if (newEventTitle) {
      calendarAPI.addEvent({
        id: `${selectedDate.dateStr}`,
        title: newEventTitle,
        start: selectedDate.startStr,
        end: selectedDate.end,
        allDay: selectedDate.allDay,
      });
    }
    handleCloseDialog();
  };

  return (
    <Box m="20px">
      <Header title="Schedule" subtitle="The Schedule of Employee" />

      {/* CALENDAR SIDEBAR */}
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
          sx={{
            height: "75vh",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvent.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* FULL CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev, next today",
              center: "title",
              right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvent(events)}
            initialEvents={[
              { id: "1234", title: "All-day event", date: "2024-08-14" },
              { id: "4321", title: "Timed-event", date: "2024-08-29" },
            ]}
          />
        </Box>
      </Box>

      {/* ADD EVENT DIALOG */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <Box>
            <TextField
              autoFocus
              variant="filled"
              label="Event Title Schedule of Employee"
              fullWidth
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              sx={{
                width: "300px",
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Box mr="14px" mb="5px" display="flex" gap="10px">
            <Button
              variant="contained"
              onClick={handleCloseDialog}
              color="inherit"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleAddEvent}
              color="secondary"
            >
              Add Event
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CalendarSchedule;
